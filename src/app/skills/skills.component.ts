import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SectionTitleComponent } from '../shared/components/section-title/section-title.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule,
    TranslateModule,
    SectionTitleComponent
  ],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  constructor(public translate: TranslateService) { }

  techIcons = [
    { icon: 'angular.svg', name: 'Angular' },
    { icon: 'ts.svg', name: 'TypeScript' },
    { icon: 'js.svg', name: 'JavaScript' },
    { icon: 'bootstrap.svg', name: 'Bootstrap' },
    { icon: 'html.svg', name: 'HTML' },
    { icon: 'firebase.svg', name: 'Firebase' },
    { icon: 'git.svg', name: 'GIT' },
    { icon: 'css.svg', name: 'CSS' },
    { icon: 'api.svg', name: 'Rest-API' },
    { icon: 'scrum.svg', name: 'Scrum' },
    { icon: 'material.svg', name: 'Material Design' },
    { icon: 'sass.svg', name: 'Scss' },
    { icon: 'photoshop.svg', name: 'Photoshop' },
    { icon: 'figma.svg', name: 'Figma' }
  ];
}