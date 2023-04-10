import { Component } from '@angular/core';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  isCollapsed = false;
  isDarkMode = false;
  toggleSidebar(){
    this.isCollapsed = !this.isCollapsed;
  }
  toggleDarkMode(){
    this.isDarkMode = !this.isDarkMode;
  }
  mySun = faSun;
  myMoon = faMoon;
}
