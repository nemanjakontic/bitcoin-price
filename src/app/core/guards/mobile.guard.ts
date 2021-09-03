import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MobileGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const isMobile = this.isMobile();
    if(!isMobile) {
      this.router.navigate(['/']);
    }
    return isMobile;
  }

  isMobile(): boolean {
    return window.innerWidth > 576 ? false : true;
  }

}
