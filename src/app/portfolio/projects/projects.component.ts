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
      imgSrc: 'new.png',
      type: 'PROJECTS.BLOG.APPLICATION_TYPE',
      title: 'PROJECTS.BLOG.TITLE',
      description: 'PROJECTS.BLOG.DESCRIPTION',
      toolchain: {
        label: 'PROJECTS.BLOG.TOOLCHAIN.LABEL',
        content: 'PROJECTS.BLOG.TOOLCHAIN.CONTENT',
      },
      category: {
        label: 'PROJECTS.BLOG.CATEGORY.LABEL',
        content: 'PROJECTS.BLOG.CATEGORY.CONTENT',
      },
      date: {
        label: 'PROJECTS.BLOG.DATE.LABEL',
        content: 'PROJECTS.BLOG.DATE.CONTENT',
      },
      liveTestLink: 'https://blog-frontend-473446493160.us-central1.run.app/#/',
      githubLink: 'https://github.com/giucino/cms-blog',

    },
    {
      imgSrc: 'davvero.png',
      type: 'PROJECTS.DAVVERO.APPLICATION_TYPE',
      title: 'PROJECTS.DAVVERO.TITLE',
      description: 'PROJECTS.DAVVERO.DESCRIPTION',
      toolchain: {
        label: 'PROJECTS.DAVVERO.TOOLCHAIN.LABEL',
        content: 'PROJECTS.DAVVERO.TOOLCHAIN.CONTENT',
      },
      category: {
        label: 'PROJECTS.DAVVERO.CATEGORY.LABEL',
        content: 'PROJECTS.DAVVERO.CATEGORY.CONTENT',
      },
      date: {
        label: 'PROJECTS.DAVVERO.DATE.LABEL',
        content: 'PROJECTS.DAVVERO.DATE.CONTENT',
      },
      liveTestLink: 'https://davvero-dillingen.de'
    },
    {
      imgSrc: 'dabubble.png',
      type: 'PROJECTS.DABUBBLE.APPLICATION_TYPE',
      title: 'PROJECTS.DABUBBLE.TITLE',
      description: 'PROJECTS.DABUBBLE.DESCRIPTION',
      toolchain: {
        label: 'PROJECTS.DABUBBLE.TOOLCHAIN.LABEL',
        content: 'PROJECTS.DABUBBLE.TOOLCHAIN.CONTENT',
      },
      category: {
        label: 'PROJECTS.DABUBBLE.CATEGORY.LABEL',
        content: 'PROJECTS.DABUBBLE.CATEGORY.CONTENT',
      },
      date: {
        label: 'PROJECTS.DABUBBLE.DATE.LABEL',
        content: 'PROJECTS.DABUBBLE.DATE.CONTENT',
      },
      liveTestLink: 'https://dabubble.giuseppe-cino.de',
      githubLink: 'https://github.com/giucino/DABubble',
    },
    {
      imgSrc: 'portfolio.png',
      type: 'PROJECTS.PORTFOLIO.APPLICATION_TYPE',
      title: 'PROJECTS.PORTFOLIO.TITLE',
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
    {
      imgSrc: 'join.png',
      type: 'PROJECTS.JOIN.APPLICATION_TYPE',
      title: 'PROJECTS.JOIN.TITLE',
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
      title: 'PROJECTS.POLLO.TITLE',
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
      title: 'PROJECTS.POKEDEX.TITLE',
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
    },
  ];
}
