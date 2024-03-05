import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ViewportAnimationDirective } from './viewport-animation.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule, ViewportAnimationDirective],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  constructor(public translate: TranslateService) {}

  projects = [
    {
      imgSrc: 'portfolio.png',
      type: 'PROJECTS.PORTFOLIO.APPLICATION_TYPE',
      title: 'Portfolio',
      description: 'PROJECTS.PORTFOLIO.DESCRIPTION',
      toolchain: {
        label: 'PROJECTS.PORTFOLIO.TOOLCHAIN.LABEL',
        content: 'PROJECTS.PORTFOLIO.TOOLCHAIN.CONTENT',
      },
      category: {
        label: 'PROJECTS.PORTFOLIO.CATEGORY.LABEL',
        content: 'PROJECTS.PORTFOLIO.CATEGORY.CONTENT',
      },
      date: {
        label: 'PROJECTS.PORTFOLIO.DATE.LABEL',
        content: 'PROJECTS.PORTFOLIO.DATE.CONTENT',
      },
      liveTestLink: 'https://giuseppe-cino.de',
      githubLink: 'https://github.com/giucino/portfolio',
    },
    // {
    //   imgSrc: 'crm.png',
    //   type: 'PROJECTS.CRM.APPLICATION_TYPE',
    //   title: 'CRM',
    //   description: 'PROJECTS.CRM.DESCRIPTION',
    //   toolchain: {
    //     label: 'PROJECTS.CRM.TOOLCHAIN.LABEL',
    //     content: 'PROJECTS.CRM.TOOLCHAIN.CONTENT',
    //   },
    //   category: {
    //     label: 'PROJECTS.CRM.CATEGORY.LABEL',
    //     content: 'PROJECTS.CRM.CATEGORY.CONTENT',
    //   },
    //   date: {
    //     label: 'PROJECTS.CRM.DATE.LABEL',
    //     content: 'PROJECTS.CRM.DATE.CONTENT',
    //   },
    //   liveTestLink: 'https://github.com/giucino/join',
    //   githubLink: 'https://github.com/giucino/join',
    // },
    {
      imgSrc: 'join.png',
      type: 'PROJECTS.JOIN.APPLICATION_TYPE',
      title: 'Join',
      description: 'PROJECTS.JOIN.DESCRIPTION',
      toolchain: {
        label: 'PROJECTS.JOIN.TOOLCHAIN.LABEL',
        content: 'PROJECTS.JOIN.TOOLCHAIN.CONTENT',
      },
      category: {
        label: 'PROJECTS.JOIN.CATEGORY.LABEL',
        content: 'PROJECTS.JOIN.CATEGORY.CONTENT',
      },
      date: {
        label: 'PROJECTS.JOIN.DATE.LABEL',
        content: 'PROJECTS.JOIN.DATE.CONTENT',
      },
      liveTestLink: 'https://join.giuseppe-cino.de',
      githubLink: 'https://github.com/giucino/join',
    },
    {
      imgSrc: 'elpollo.png',
      type: 'PROJECTS.POLLO.APPLICATION_TYPE',
      title: 'El Pollo Loco',
      description: 'PROJECTS.POLLO.DESCRIPTION',
      toolchain: {
        label: 'PROJECTS.POLLO.TOOLCHAIN.LABEL',
        content: 'PROJECTS.POLLO.TOOLCHAIN.CONTENT',
      },
      category: {
        label: 'PROJECTS.POLLO.CATEGORY.LABEL',
        content: 'PROJECTS.POLLO.CATEGORY.CONTENT',
      },
      date: {
        label: 'PROJECTS.POLLO.DATE.LABEL',
        content: 'PROJECTS.POLLO.DATE.CONTENT',
      },
      liveTestLink: 'https://elpolloloco.giuseppe-cino.de',
      githubLink: 'https://github.com/giucino/el_pollo_loco',
    },
    {
      imgSrc: 'pokedex.png',
      type: 'PROJECTS.POKEDEX.APPLICATION_TYPE',
      title: 'Pokedex',
      description: 'PROJECTS.POKEDEX.DESCRIPTION',
      toolchain: {
        label: 'PROJECTS.POKEDEX.TOOLCHAIN.LABEL',
        content: 'PROJECTS.POKEDEX.TOOLCHAIN.CONTENT',
      },
      category: {
        label: 'PROJECTS.POKEDEX.CATEGORY.LABEL',
        content: 'PROJECTS.POKEDEX.CATEGORY.CONTENT',
      },
      date: {
        label: 'PROJECTS.POKEDEX.DATE.LABEL',
        content: 'PROJECTS.POKEDEX.DATE.CONTENT',
      },
      liveTestLink: 'https://pokedex.giuseppe-cino.de',
      githubLink: 'https://github.com/giucino/pokedex',
    }
  ];
}