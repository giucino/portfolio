import { Component, Input } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss']
})
export class SectionTitleComponent {

  constructor(public translate: TranslateService) { }

  @Input() titlePrefixKey!: string;
  @Input() titleKey!: string;
  @Input() titleSuffixKey!: string;
  @Input() sectionId!: string;
  @Input() animation?: string;
  @Input() duration?: number;
  @Input() offset?: number;
  @Input() easing?: string;
}