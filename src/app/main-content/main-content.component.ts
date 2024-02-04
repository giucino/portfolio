import { Component } from '@angular/core';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [MainContentComponent, LandingPageComponent, AboutComponent, SkillsComponent],
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent {

}