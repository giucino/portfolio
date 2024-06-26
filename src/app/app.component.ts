import {
  Component,
  OnInit,
  Renderer2,
  Inject,
  Injectable,
} from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { PreloaderComponent } from './preloader/preloader.component';
import { MainContentComponent } from './main-content/main-content.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';
import { TranslateService } from '@ngx-translate/core';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    PreloaderComponent,
    MainContentComponent,
    HeaderComponent,
    FooterComponent,
    ImprintComponent,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
@Injectable({
  providedIn: 'root',
})
export class AppComponent implements OnInit {
  title = 'Portfolio';
  isLoading = true;

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private translate: TranslateService,
    private router: Router
  ) {
    this.translate.setDefaultLang('de');
  }

  ngOnInit(): void {
    this.router.navigate(['/']); // nur in Verbindung mit "replaceState"
    if (this.isLoading) {
      this.renderer.setStyle(this.document.body, 'overflow', 'hidden');
    }
    setTimeout(() => {
      this.isLoading = false;
      this.renderer.removeStyle(this.document.body, 'overflow');
    }, 2500);
    AOS.init();
  }
}
