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
    { icon: 'node.png', name: 'Node.js' },
    { icon: 'mysql.png', name: 'MySQL' },
    // { icon: 'elementor.png', name: 'Elementor' },
    { icon: 'tailwind.png', name: 'TailwindCSS' },
    { icon: 'material.svg', name: 'Material Design' },
    { icon: 'bootstrap.svg', name: 'Bootstrap' },
    { icon: 'wordpress.svg', name: 'WordPress' },
    // { icon: 'scrum.svg', name: 'Scrum' },
    // { icon: 'figma.svg', name: 'Figma' },
    { icon: 'photoshop.svg', name: 'Photoshop' },
    // { icon: 'SKILLS.RESPONSIBILITY_IMG', name: 'SKILLS.RESPONSIBILITY' },
    // { icon: 'SKILLS.TEAM_IMG', name: 'SKILLS.TEAM' },
    // { icon: 'SKILLS.SOLVING_IMG', name: 'SKILLS.SOLVING' },
    // { icon: 'SKILLS.CREATIVE_IMG', name: 'SKILLS.CREATIVE' },
  ];
}
