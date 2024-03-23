import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterModule, Router } from '@angular/router';
import { NavigationService } from '../../services/navigation.service';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  socialLinks = [
    { url: 'mailto:hi@giuseppe-cino.de', iconClass: 'pi pi-envelope' },
    { url: 'https://github.com/giucino', iconClass: 'pi pi-github' },
    {
      url: 'https://www.linkedin.com/in/giuseppe-cino',
      iconClass: 'pi pi-linkedin',
    },
  ];

  constructor(
    public translate: TranslateService,
    private navigationService: NavigationService,
    private router: Router,
    private el: ElementRef
  ) {}

  navigateToTop() {
    this.navigationService.scrollToTheTop();
  }

  scrollToTopAndNavigateToImprint() {
    this.router.navigate(['/imprint']).then(() => {
      this.el.nativeElement.ownerDocument.defaultView.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }
}
