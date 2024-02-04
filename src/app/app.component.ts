import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PreloaderComponent } from './preloader/preloader.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet,
    NgIf, 
    PreloaderComponent,
    MainContentComponent,
    FooterComponent,
    ImprintComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoading:boolean = true;

  ngOnInit(): void {
    if (this.isLoading) {
      document.body.classList.add('no-scroll');
    }
    setTimeout(() => {
      this.isLoading = false;
      document.body.classList.remove('no-scroll');
    }, 2500);
  }
}
