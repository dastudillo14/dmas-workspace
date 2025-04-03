import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export enum TitleColor {
  red = 'text-red-500',
  green = 'text-green-500',
  blue = 'text-blue-500',
  purple = 'text-purple-500',
}

@Component({
  selector: 'lib-dmas-side-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './dmas-side-menu.component.html',
  styles: ``
})
export class DmasSideMenuComponent {
  public isAuthenticated = input(false);
  public titleColor = input<TitleColor>(TitleColor.purple);

  public onSignOut = output();

  public onSignIn = output();



}
