import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SectionTitleComponent } from '../shared/components/section-title/section-title.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule, SectionTitleComponent],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  constructor(public translate: TranslateService) {}

  techIcons = [
    { icon: 'angular.svg', name: 'Angular' },
    { icon: 'ts.svg', name: 'TypeScript' },
    { icon: 'js.svg', name: 'JavaScript' },
    { icon: 'html.svg', name: 'HTML' },
    { icon: 'css.svg', name: 'CSS' },
    { icon: 'sass.svg', name: 'SCSS' },
    { icon: 'git.svg', name: 'GIT' },
    { icon: 'api.svg', name: 'Rest-API' },
    { icon: 'firebase.svg', name: 'Firebase' },
    { icon: 'material.svg', name: 'Material Design' },
    { icon: 'bootstrap.svg', name: 'Bootstrap' },
    { icon: 'scrum.svg', name: 'Scrum' },
    { icon: 'figma.svg', name: 'Figma' },
    { icon: 'photoshop.svg', name: 'Photoshop' },
    { icon: 'e.png', name: 'SKILLS.RESPONSIBILITY' },
    { icon: 't.png', name: 'SKILLS.TEAM' },
    { icon: 'l.png', name: 'SKILLS.SOLVING' },
    { icon: 'k.png', name: 'SKILLS.CREATIVE' },
  ];
}
