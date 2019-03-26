import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showMenu() {
    const menuOptions = document.getElementById('mobile-menu');
    if (menuOptions.classList.contains('hidden')) {
      menuOptions.classList.remove('hidden');
    } else {
      menuOptions.classList.add('hidden');
    }
  }

}
