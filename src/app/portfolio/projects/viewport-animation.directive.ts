import { Directive, ElementRef, AfterViewInit, Renderer2, Input, PLATFORM_ID, Inject  } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appViewportAnimation]',
  standalone: true
})
export class ViewportAnimationDirective implements AfterViewInit {

  @Input() appViewportAnimation!: string; // Nimmt die Klasse als Input

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.setupIntersectionObserver();
    }
  }

  // private setupIntersectionObserver() {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       const animationClasses = this.appViewportAnimation.split(' ') || ['animate__animated', 'animate__fadeInUp'];
        
  //       if (entry.isIntersecting) {
  //         animationClasses.forEach(className => {
  //           this.renderer.addClass(this.el.nativeElement, className);
  //         });
  //       } else {
  //         animationClasses.forEach(className => {
  //           this.renderer.removeClass(this.el.nativeElement, className);
  //         });
  //       }
  //     });
  //   }, { rootMargin: '50px', threshold: 0 });

  //   observer.observe(this.el.nativeElement);
  // }
  private setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Verwenden Sie requestAnimationFrame, um die Animation zu starten
          requestAnimationFrame(() => {
            this.renderer.addClass(entry.target, 'animate__animated');
            this.renderer.addClass(entry.target, 'animate__fadeInUp');
          });
        } else {
          // Optional: Verwenden Sie requestAnimationFrame, um die Animation zurückzusetzen
          requestAnimationFrame(() => {
            this.renderer.removeClass(entry.target, 'animate__animated');
            this.renderer.removeClass(entry.target, 'animate__fadeInUp');
          });
        }
      });
    }, { rootMargin: '50px', threshold: 0 });
  
    observer.observe(this.el.nativeElement);
  }
  
}
