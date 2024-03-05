import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit {
  menuValue: boolean = false;

  fragments = [
    { path: '/', id: 'home', label: 'NAVBAR.HOME' },
    { path: '/', id: 'about', label: 'NAVBAR.ABOUT' },
    { path: '/', id: 'skills', label: 'NAVBAR.SKILLS' },
    { path: '/', id: 'projects', label: 'NAVBAR.PROJECTS' },
    { path: '/', id: 'contact', label: 'NAVBAR.CONTACT' },
  ];

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    public translate: TranslateService,
    private navigationService: NavigationService
  ) {}

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  ngAfterViewInit() {
    const hamburgerElement = this.el.nativeElement.querySelector('.hamburger');

    this.renderer.listen(hamburgerElement, 'click', () => {
      hamburgerElement.classList.toggle('is-open');
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

  openMenu() {
    this.menuValue = !this.menuValue;
    if (this.menuValue) {
      this.renderer.setStyle(document.body, 'overflow', 'hidden');
    }
  }

  closeMenu() {
    this.menuValue = false;
    const hamburgerElement = this.el.nativeElement.querySelector('.hamburger');
    hamburgerElement.classList.remove('is-open');
    this.renderer.removeStyle(document.body, 'overflow');
  }

  navigateToTop() {
    this.navigationService.scrollToTop();
  }
}
