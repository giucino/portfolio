import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [],
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss']
})
export class SectionTitleComponent {
  @Input() titlePrefix!: string;
  @Input() title!: string;
  @Input() sectionId!: string;
  @Input() animation!: string;
  @Input() duration!: number; 
  @Input() offset!: string;
  @Input() easing!: string;
}
