import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { ContactComponent } from '../contact/contact.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ScrollTopModule } from 'primeng/scrolltop';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule,
    MainContentComponent,
    LandingPageComponent,
    AboutComponent,
    SkillsComponent,
    PortfolioComponent,
    ContactComponent,
    ScrollTopModule
  ],
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainContentComponent implements OnInit, OnDestroy {

  private fragmentSubscription!: Subscription;

  constructor(private activeRoute: ActivatedRoute) { }


  ngOnInit() {
    this.fragmentSubscription = this.activeRoute.fragment.subscribe((data) => {
      console.log(data);
      // this.jumpToSection(data);
    });
  }

  ngOnDestroy() {
    if (this.fragmentSubscription) {
      this.fragmentSubscription.unsubscribe();
    }
  }

  // jumpToSection(section: any) {
  //   document.getElementById(section)?.scrollIntoView({ behavior: 'auto' });
  // }
}




// import { Component, OnInit, inject } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { LandingPageComponent } from '../landing-page/landing-page.component';
// import { AboutComponent } from '../about/about.component';
// import { SkillsComponent } from '../skills/skills.component';
// import { ContactComponent } from '../contact/contact.component';
// import { PortfolioComponent } from '../portfolio/portfolio.component';
// import { ScrollTopModule } from 'primeng/scrolltop';
// import { ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-main-content',
//   standalone: true,
//   imports: [ CommonModule,
//     MainContentComponent, 
//     LandingPageComponent, 
//     AboutComponent, 
//     SkillsComponent,
//     PortfolioComponent,
//     ContactComponent,
//     ScrollTopModule
//   ],
//   templateUrl: './main-content.component.html',
//   styleUrls: ['./main-content.component.scss']
// })
// export class MainContentComponent implements OnInit {
//   activeRoute: ActivatedRoute = inject(ActivatedRoute);

//   ngOnInit() {
//     this.activeRoute.fragment.subscribe((data) => {
//       console.log(data);
//       this.jumpToSection(data);
//     });
//   }

//   jumpToSection(section: any) {
//     document.getElementById(section)?.scrollIntoView({ behavior: 'auto' });
//   }
// }