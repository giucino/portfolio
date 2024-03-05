import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(private router: Router) {}

  scrollToTop() {
    window.scrollTo(0, 0);
    if (this.router.url !== '/home') {
      this.router.navigate(['/'], { fragment: 'home' });
    }
  }
}
