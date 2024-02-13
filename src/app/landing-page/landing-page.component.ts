import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavbarComponent, TranslateModule],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  translatedText!: string;

  constructor(public translate: TranslateService) { }

  ngOnInit() {
    this.translateText();

    this.translate.onLangChange.subscribe(() => {
      this.translateText();
    });
  }

  translateText() {
    this.translate.get('LANDING.SAY_HELLO').subscribe((res: string) => {
      this.translatedText = res;
    });
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}