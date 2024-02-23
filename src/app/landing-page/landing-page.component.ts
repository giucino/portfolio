import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  // translatedText!: string;

  constructor(public translate: TranslateService) { }

  // ngOnInit() {
  //   this.translateText();

  //   this.translate.onLangChange.subscribe(() => {
  //     this.translateText();
  //   });
  // }

  // translateText() {
  //   this.translate.get('LANDING.SAY_HELLO').subscribe((res: string) => {
  //     this.translatedText = res;
  //   });
  // }
}