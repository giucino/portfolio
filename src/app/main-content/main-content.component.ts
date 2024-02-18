import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { ContactComponent } from '../contact/contact.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ScrollTopModule } from 'primeng/scrolltop';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [ CommonModule,
    MainContentComponent, 
    LandingPageComponent, 
    AboutComponent, 
    SkillsComponent,
    PortfolioComponent,
    ContactComponent,
    ScrollTopModule
  ],
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent {
}