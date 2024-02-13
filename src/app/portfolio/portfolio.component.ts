import { Component } from '@angular/core';
import { SectionTitleComponent } from '../shared/components/section-title/section-title.component';
import { ProjectsComponent } from './projects/projects.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [SectionTitleComponent, 
    ProjectsComponent, 
    TranslateModule
  ],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  constructor(public translate: TranslateService) { }

}
