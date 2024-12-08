import { CanActivateFn, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  constructor(private router: Router) {}

  canActivate(route: any, state: any): boolean {
    // Retrieve user details from localStorage
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    const token = localStorage.getItem('token');

    if (token) {
      // Check the required role for the route
      if (route.data?.role === 'admin' && isAdmin) {
        return true;
      } else if (route.data?.role === 'user' && !isAdmin) {
        return true;
      } else {
        // Redirect unauthorized users
        this.router.navigate(['/unauthorized']); 
        return false;
      }
    }

    // If no token, redirect to login
    this.router.navigate(['/login']);
    return false;
  }
}
