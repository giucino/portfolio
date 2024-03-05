import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { ContactComponent } from '../contact/contact.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ScrollTopModule } from 'primeng/scrolltop';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    CommonModule,
    MainContentComponent,
    LandingPageComponent,
    AboutComponent,
    SkillsComponent,
    PortfolioComponent,
    ContactComponent,
    ScrollTopModule,
  ],
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainContentComponent implements OnInit, OnDestroy {
  private fragmentSubscription!: Subscription;
  private scrollSubscription!: Subscription;

  constructor(
    private activeRoute: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {
    this.scrollSubscription = fromEvent(window, 'scroll')
      .pipe(throttleTime(80))
      .subscribe(() => this.onWindowScroll());
  }

  onWindowScroll() {
    let scrollPosition = window.scrollY || document.documentElement.scrollTop;
    scrollPosition += 100;

    const sections: any = document.querySelectorAll('.section');
    let currentSectionId: string | null = null;

    sections.forEach((section: HTMLElement) => {
      if (
        section.offsetTop <= scrollPosition &&
        section.offsetTop + section.offsetHeight > scrollPosition
      ) {
        currentSectionId = section.id;

        let navLinks: any = document.querySelectorAll('.header-menu a');
        navLinks.forEach((link: any) => {
          if (link.href.includes(section.id)) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });

    if (currentSectionId) {
      this.location.replaceState('/#' + currentSectionId);

      // this.router.navigate([], { fragment: currentSectionId });
    }
  }

  ngOnInit() {
    this.fragmentSubscription = this.activeRoute.fragment.subscribe((data) => {
      this.jumpToSection(data);
    });
  }

  ngOnDestroy() {
    if (this.fragmentSubscription) {
      this.fragmentSubscription.unsubscribe();
    }
    if (this.scrollSubscription) {
      this.scrollSubscription.unsubscribe();
    }
  }

  jumpToSection(section: any) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'auto' });
  }
}
