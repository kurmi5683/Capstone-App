import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Collapse, Dropdown, initTE } from 'tw-elements';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor (private router: Router) { }

  ngOnInit() {
    initTE({ Collapse, Dropdown });
  }

  logoutUser = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('fullName');
    localStorage.removeItem('isAdmin');
    this.router.navigate(['/login']);
    // console.log(localStorage.getItem('token'));
  };
  isAuthenticated = (): boolean => {
    const token = localStorage.getItem('token');
    return !!token;
  };

  fullname = localStorage.getItem('fullName')

  getUserRole(): string {
    // Fetch the 'isAdmin' value from localStorage
    const isAdmin = localStorage.getItem('isAdmin');
    
    // If 'isAdmin' is null or undefined, return a default value (e.g., 'guest')
    if (isAdmin === null || isAdmin === undefined) {
      return 'guest'; // Default role when no one is logged in
    }
    
    // If 'isAdmin' is true, return 'admin'; otherwise, return 'user'
    return isAdmin === 'true' ? 'admin' : 'user';
  }

  navigateToDashboard(): void {
    const role = this.getUserRole();
    if (role === 'admin') {
      this.router.navigate(['/admin']);
    } else if(role === 'user') {
      this.router.navigate(['/user']);
    }
    else{
      this.router.navigate(['/login']);
    }

  }
}
