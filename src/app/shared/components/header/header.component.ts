import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2, OnInit, OnDestroy } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private fragmentSubscription!: Subscription;
  activeFragment!: string;

  fragments = [
    { path: '/home', id: 'home', label: 'NAVBAR.HOME' },
    { path: '/home', id: 'about', label: 'NAVBAR.ABOUT' },
    { path: '/home', id: 'skills', label: 'NAVBAR.SKILLS' },
    { path: '/home', id: 'projects', label: 'NAVBAR.PROJECTS' },
    { path: '/home', id: 'contact', label: 'NAVBAR.CONTACT' }
  ];
  // menuItems = [
  //   { link: '/home', label: 'NAVBAR.HOME' },
  //   { link: '/home', label: 'NAVBAR.ABOUT' },
  //   { link: '/home', label: 'NAVBAR.SKILLS' },
  //   { link: '/home', label: 'NAVBAR.PROJECTS' },
  //   { link: '/home', label: 'NAVBAR.CONTACT' }
  // ];

  constructor(private el: ElementRef, private renderer: Renderer2,
    public translate: TranslateService, private route: ActivatedRoute) {

    // this.route.fragment.pipe(
    //   filter(Boolean), // Filtere falsy Werte heraus
    //   map(fragment => fragment as string) // Stelle sicher, dass der Typ string ist
    // ).subscribe(fragment => {
    //   this.activeFragment = fragment;
    // });
  }

  ngOnInit() {
    this.fragmentSubscription = this.route.fragment.pipe(
      filter(Boolean), // Filtere falsy Werte heraus
      map(fragment => fragment as string) // Stelle sicher, dass der Typ string ist
    ).subscribe(fragment => {
      this.activeFragment = fragment;    });
  }

  ngOnDestroy() {
    if (this.fragmentSubscription) {
      this.fragmentSubscription.unsubscribe();
    }
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  ngAfterViewInit() {
    const hamburgerElement = this.el.nativeElement.querySelector('.hamburger');

    this.renderer.listen(hamburgerElement, 'click', () => {
      hamburgerElement.classList.toggle('is-active');
      if (this.menuValue) {
        this.renderer.setStyle(document.body, 'overflow', 'hidden');
      } else {
        this.renderer.removeStyle(document.body, 'overflow');
      }
    });
    this.renderer.listen('document', 'click', (event) => {
      if (!hamburgerElement.contains(event.target)) {
        this.closeMenu();
        this.renderer.removeStyle(document.body, 'overflow');
      }
    });
  }


  menuValue: boolean = false;


  openMenu() {
    this.menuValue = !this.menuValue;
    if (this.menuValue) {
      this.renderer.setStyle(document.body, 'overflow', 'hidden');
    }
  }


  closeMenu() {
    this.menuValue = false;
    const hamburgerElement = this.el.nativeElement.querySelector('.hamburger');
    hamburgerElement.classList.remove('is-active');
    this.renderer.removeStyle(document.body, 'overflow');
  }

  isActive(fragmentId: string): boolean {
    return this.activeFragment === fragmentId;
  }
}