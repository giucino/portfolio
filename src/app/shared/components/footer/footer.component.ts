import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

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
      url: 'https://www.linkedin.com/in/giuseppe-cino-9a9b0b268/',
      iconClass: 'pi pi-linkedin',
    },
    // { url: 'https://www.linkedin.com/in/giuseppe-cino-9a9b0b268/', iconClass: 'fa-brands fa-xing' }
    // { url: 'https://www.linkedin.com/in/giuseppe-cino-9a9b0b268/', iconClass: 'pi pi-discord' }
  ];

  constructor(public translate: TranslateService) {}
}
