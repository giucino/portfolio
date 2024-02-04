import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const hamburgerElement = this.el.nativeElement.querySelector('.hamburger');
    this.renderer.listen(hamburgerElement, 'click', () => {
      hamburgerElement.classList.toggle('is-active');
    });
    this.renderer.listen('document', 'click', (event) => {
      if (!hamburgerElement.contains(event.target)) {
        this.closeMenu();
      }
    });
  }

  menuValue:boolean = false;

  openMenu() {
    this.menuValue = !this.menuValue;
  }

  closeMenu() {
    this.menuValue = false;
    const hamburgerElement = this.el.nativeElement.querySelector('.hamburger');
    hamburgerElement.classList.remove('is-active');
  }
}