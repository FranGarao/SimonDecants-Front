import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  routeParam: any | string;

  openNav: boolean = false;

  openNavbar() {
    
    this.openNav = !this.openNav;
    
    const openNavbar = document.querySelector('.sidebar-content') as HTMLElement;
    openNavbar.classList.toggle('open-nav');

    const openNavButton = document.querySelector('.open-nav-btn') as HTMLElement;
    if(this.openNav) {
      openNavButton.classList.toggle('close-nav-btn');
      this.openNav = false;
    } else {
      openNavButton.classList.toggle('open-nav-btn');
    }  
  }

  toggleSubMenu() {
    const sidebar = document.querySelector('.submenu') as HTMLElement;
    sidebar.classList.toggle('open-drop');
  }
}
