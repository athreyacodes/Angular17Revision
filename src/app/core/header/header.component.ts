import { Component } from '@angular/core';
import { MaterialModule } from '../../shared/modules/mat-module/material.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
