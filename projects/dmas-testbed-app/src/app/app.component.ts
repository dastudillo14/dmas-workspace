import { Component, signal } from '@angular/core';
import {  DmasSideMenuComponent, TitleColor } from "dmas-side-menu";

@Component({
  selector: 'app-root',
  imports: [DmasSideMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dmas-testbed-app';

  public isAuthenticated = signal(true);
  public myTitleColor = TitleColor.red;
  
}
