import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2 } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  menuItems = [
    { link: '/', label: 'NAVBAR.HOME' },
    { link: '#about', label: 'NAVBAR.ABOUT' },
    { link: '#skills', label: 'NAVBAR.SKILLS' },
    { link: '#projects', label: 'NAVBAR.PROJECTS' },
    { link: '#contact', label: 'NAVBAR.CONTACT' }
  ];

  constructor(private el: ElementRef, private renderer: Renderer2, public translate: TranslateService) { }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

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