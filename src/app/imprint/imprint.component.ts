import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { ScrollTopModule } from 'primeng/scrolltop';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [TranslateModule, RouterModule, ScrollTopModule],
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss'],
})
export class ImprintComponent {
  constructor(public translate: TranslateService) {}
}
