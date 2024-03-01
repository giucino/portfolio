import {
  Directive,
  ElementRef,
  AfterViewInit,
  Renderer2,
  Input,
  PLATFORM_ID,
  Inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appViewportAnimation]',
  standalone: true,
})
export class ViewportAnimationDirective implements AfterViewInit {
  @Input() appViewportAnimation!: string; // Nimmt die Klasse als Input

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.setupIntersectionObserver();
    }
  }

  private setupIntersectionObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const animationClasses = this.appViewportAnimation.split(' ') || [
            'animate__animated',
            'animate__fadeInUp',
          ];
          if (entry.isIntersecting) {
            // Starten der Animation mit requestAnimationFrame
            requestAnimationFrame(() => {
              animationClasses.forEach((className) => {
                this.renderer.addClass(entry.target, className);
              });
            });
          } else {
            // Zurücksetzen der Animation
            requestAnimationFrame(() => {
              animationClasses.forEach((className) => {
                this.renderer.removeClass(entry.target, className);
              });
            });
          }
        });
      },
      { rootMargin: '50px', threshold: 0 }
    );

    observer.observe(this.el.nativeElement);
  }
}