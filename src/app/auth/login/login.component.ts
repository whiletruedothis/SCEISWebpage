import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isFailedLogged: boolean;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.isFailedLogged = false;
  }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.loginForm = this.fb.group({
      email: [ '', [ Validators.required, Validators.pattern('[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}') ] ],
      password: [ '', [ Validators.required, Validators.minLength(6) ] ]
    });
  }

  login() {
    this.isFailedLogged = false;
    this.authService.login(this.loginForm.value).then(
      res => {
        this.router.navigate(['']);
      }
    ).catch(err => {
      console.log(err);
      this.isFailedLogged = true;
    });
  }

  errorMessage(field) {
    if (this.loginForm.get(field).hasError('required')) {
      return 'Se requiere de este campo';
    } else {
      return 'Formato de email invalido';
    }
  }

}
