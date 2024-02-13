import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2 } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  menuItems = [
    { link: '/', label: 'NAVBAR.HOME' },
    { link: '#about', label: 'NAVBAR.ABOUT' },
    { link: '#skills', label: 'NAVBAR.SKILLS' },
    { link: '#projekte', label: 'NAVBAR.PROJECTS' },
    { link: '#contact', label: 'NAVBAR.CONTACT' }
  ];

  socialLinks = [
    { url: 'https://github.com/giucino', iconClass: 'fa-brands fa-github' },
    { url: 'https://www.linkedin.com/in/giuseppe-cino-9a9b0b268/', iconClass: 'fa-brands fa-xing' },
    { url: 'https://www.linkedin.com/in/giuseppe-cino-9a9b0b268/', iconClass: 'fa-brands fa-linkedin-in' },
    { url: 'https://www.linkedin.com/in/giuseppe-cino-9a9b0b268/', iconClass: 'fa-brands fa-discord' },
    { url: 'mailto:giucino1980@gmail.com', iconClass: 'fa-solid fa-envelope' }
  ];

  constructor(private el: ElementRef, private renderer: Renderer2, public translate: TranslateService) { }

  ngAfterViewInit() {
    const hamburgerElement = this.el.nativeElement.querySelector('.hamburger');

    this.renderer.listen(hamburgerElement, 'click', () => {
      hamburgerElement.classList.toggle('is-active');
      if (this.menuValue) {
        this.renderer.setStyle(document.body, 'overflow', 'hidden');
      } else {
        this.renderer.removeStyle(document.body, 'overflow');
      }
    });
    this.renderer.listen('document', 'click', (event) => {
      if (!hamburgerElement.contains(event.target)) {
        this.closeMenu();
        this.renderer.removeStyle(document.body, 'overflow');
      }
    });
  }
  

  menuValue: boolean = false;


  openMenu() {
    this.menuValue = !this.menuValue;
    if (this.menuValue) {
      this.renderer.setStyle(document.body, 'overflow', 'hidden');
    }
  }


  closeMenu() {
    this.menuValue = false;
    const hamburgerElement = this.el.nativeElement.querySelector('.hamburger');
    hamburgerElement.classList.remove('is-active');
    this.renderer.removeStyle(document.body, 'overflow');
  }
}