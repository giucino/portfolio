// import { Component, QueryList, ViewChildren, ElementRef, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
// import { TranslateModule, TranslateService } from '@ngx-translate/core';
// import { isPlatformBrowser } from '@angular/common';


// @Component({
//   selector: 'app-projects',
//   standalone: true,
//   imports: [TranslateModule
//   ],
//   templateUrl: './projects.component.html',
//   styleUrls: ['./projects.component.scss']
// })
// export class ProjectsComponent implements AfterViewInit {
//   @ViewChildren('animateElement') elements!: QueryList<ElementRef>;

//   constructor(@Inject(PLATFORM_ID) private platformId: object, public translate: TranslateService) { }


//   ngAfterViewInit() {
//     this.elements.forEach(element => {
//       this.observeElement(element.nativeElement);
//     });
//   }

//   private observeElement(element: Element) {
//     if (isPlatformBrowser(this.platformId)) {
//       if ('IntersectionObserver' in window) {
//         const observer = new IntersectionObserver((entries) => {
//           entries.forEach(entry => {
//             if (entry.isIntersecting) {

//               entry.target.classList.add('animate__animated','animate__fadeInUp');
//               // observer.unobserve(entry.target);

//               setTimeout(() => {
//                 entry.target.classList.remove('animate__animated','animate__fadeInUp');
//               }, 4000); 
//             }
//           });
//         }, { threshold: [0.1] });

//         observer.observe(element);
//       }
//     } else {
//       // Fallback-Logik für nicht-Browser-Umgebungen
//       element.classList.add('animate__animated','animate__fadeInUp');
//     }
//   }
// }

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ViewportAnimationDirective } from './viewport-animation.directive';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule, ViewportAnimationDirective
  ],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  constructor(public translate: TranslateService) { }

  projects = [
    {
      imgSrc: 'join.png',
      type: 'PROJECTS.JOIN.APPLICATION_TYPE',
      title: 'Join',
      description: 'PROJECTS.JOIN.DESCRIPTION',
      toolchain: {
        label: 'PROJECTS.JOIN.TOOLCHAIN.LABEL',
        content: 'PROJECTS.JOIN.TOOLCHAIN.CONTENT'
      },
      category: {
        label: 'PROJECTS.JOIN.CATEGORY.LABEL',
        content: 'PROJECTS.JOIN.CATEGORY.CONTENT'
      },
      date: {
        label: 'PROJECTS.JOIN.DATE.LABEL',
        content: 'PROJECTS.JOIN.DATE.CONTENT'
      },
      liveTestLink: 'https://github.com/giucino/join',
      githubLink: 'https://github.com/giucino/join',
    },
    {
      imgSrc: 'elpollo.png',
      type: 'PROJECTS.POLLO.APPLICATION_TYPE',
      title: 'El Pollo Loco',
      description: 'PROJECTS.POLLO.DESCRIPTION',
      toolchain: {
        label: 'PROJECTS.POLLO.TOOLCHAIN.LABEL',
        content: 'PROJECTS.POLLO.TOOLCHAIN.CONTENT'
      },
      category: {
        label: 'PROJECTS.POLLO.CATEGORY.LABEL',
        content: 'PROJECTS.POLLO.CATEGORY.CONTENT'
      },
      date: {
        label: 'PROJECTS.POLLO.DATE.LABEL',
        content: 'PROJECTS.POLLO.DATE.CONTENT'
      },
      liveTestLink: 'https://github.com/giucino/el_pollo_loco',
      githubLink: 'https://github.com/giucino/el_pollo_loco',
    },
    {
      imgSrc: 'pokedex.png',
      type: 'PROJECTS.POKEDEX.APPLICATION_TYPE',
      title: 'Pokedex',
      description: 'PROJECTS.POKEDEX.DESCRIPTION',
      toolchain: {
        label: 'PROJECTS.POKEDEX.TOOLCHAIN.LABEL',
        content: 'PROJECTS.POKEDEX.TOOLCHAIN.CONTENT'
      },
      category: {
        label: 'PROJECTS.POKEDEX.CATEGORY.LABEL',
        content: 'PROJECTS.POKEDEX.CATEGORY.CONTENT'
      },
      date: {
        label: 'PROJECTS.POKEDEX.DATE.LABEL',
        content: 'PROJECTS.POKEDEX.DATE.CONTENT'
      },
      liveTestLink: 'https://github.com/giucino/pokedex',
      githubLink: 'https://github.com/giucino/pokedex',
    },
    {
      imgSrc: 'crm.png',
      type: 'PROJECTS.CRM.APPLICATION_TYPE',
      title: 'CRM',
      description: 'PROJECTS.CRM.DESCRIPTION',
      toolchain: {
        label: 'PROJECTS.CRM.TOOLCHAIN.LABEL',
        content: 'PROJECTS.CRM.TOOLCHAIN.CONTENT'
      },
      category: {
        label: 'PROJECTS.CRM.CATEGORY.LABEL',
        content: 'PROJECTS.CRM.CATEGORY.CONTENT'
      },
      date: {
        label: 'PROJECTS.CRM.DATE.LABEL',
        content: 'PROJECTS.CRM.DATE.CONTENT'
      },
      liveTestLink: 'https://github.com/giucino/join',
      githubLink: 'https://github.com/giucino/join',
    }
  ];
}