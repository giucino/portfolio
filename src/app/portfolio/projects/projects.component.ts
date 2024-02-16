import { Component, QueryList, ViewChildren, ElementRef, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TranslateModule
  ],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements AfterViewInit {
  @ViewChildren('animateElement') elements!: QueryList<ElementRef>;

  constructor(@Inject(PLATFORM_ID) private platformId: object, public translate: TranslateService) { }


  ngAfterViewInit() {
    this.elements.forEach(element => {
      this.observeElement(element.nativeElement);
    });
  }

  private observeElement(element: Element) {
    if (isPlatformBrowser(this.platformId)) {
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              
              entry.target.classList.add('animate__animated','animate__fadeInUp');
              // observer.unobserve(entry.target);
  
              setTimeout(() => {
                entry.target.classList.remove('animate__animated','animate__fadeInUp');
              }, 4000); 
            }
          });
        }, { threshold: [0.1] });
  
        observer.observe(element);
      }
    } else {
      // Fallback-Logik für nicht-Browser-Umgebungen
      element.classList.add('animate__animated','animate__fadeInUp');
    }
  }
}