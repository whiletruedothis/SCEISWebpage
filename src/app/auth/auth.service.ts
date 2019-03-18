import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afauth: AngularFireAuth) { }

  login(userData) {
    return new Promise<any>((resolve, reject) => {
      this.afauth.auth.signInWithEmailAndPassword(userData.email, userData.password)
      .then(res => {
        resolve(res);
      }, err => {
        reject(err);
      });
    });
  }

  isLogged() {
    return this.afauth.authState.pipe(first());
  }

}
