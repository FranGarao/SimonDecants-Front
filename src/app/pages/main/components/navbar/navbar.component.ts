import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
routeParam: any|string;

  openNavbar() {
    const openNavbar = document.querySelector('.sidebar-content') as HTMLElement;
    openNavbar.classList.toggle('open');
  }

  toggleSubMenu() {
    const sidebar = document.querySelector('.submenu') as HTMLElement;
    sidebar.classList.toggle('open');
  }

}
