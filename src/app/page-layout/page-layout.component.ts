import { Component } from '@angular/core';

@Component({
  selector: 'app-page-layout',
  standalone: true,
  imports: [],
  templateUrl: './page-layout.component.html',
  styleUrl: './page-layout.component.css'
})
export class PageLayoutComponent {

  headerMenuIndex: number = -1;
  mouseOverHeaderMenu = (setHeaderMenuIndex: number) => {
    this.headerMenuIndex = setHeaderMenuIndex;
  }
}