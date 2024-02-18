import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslateModule
  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  socialLinks = [
    { url: 'mailto:giucino1980@gmail.com', iconClass: 'fa-solid fa-envelope' },
    { url: 'https://github.com/giucino', iconClass: 'fa-brands fa-github' },
    { url: 'https://www.linkedin.com/in/giuseppe-cino-9a9b0b268/', iconClass: 'fa-brands fa-linkedin-in' },
    { url: 'https://www.linkedin.com/in/giuseppe-cino-9a9b0b268/', iconClass: 'fa-brands fa-discord' }
    // { url: 'https://www.linkedin.com/in/giuseppe-cino-9a9b0b268/', iconClass: 'fa-brands fa-xing' }
  ];


  constructor(public translate: TranslateService) { }

}
