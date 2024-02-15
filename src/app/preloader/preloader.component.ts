import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-preloader',
  standalone: true,
  imports: [],
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent {

  @Input() isLoading: boolean = false;
}