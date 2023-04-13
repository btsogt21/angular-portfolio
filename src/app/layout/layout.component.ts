import { Component } from '@angular/core';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  isCollapsed = true;
  isDarkMode = false;
  openSidebar(){
    this.isCollapsed = false;
  }
  closeSidebar(){
    this.isCollapsed = true;
  }
  // toggleSidebar(){
  //   this.isCollapsed = !this.isCollapsed;
  // }
  toggleDarkMode(){
    this.isDarkMode = !this.isDarkMode;
  }
  mySun = faSun;
  myMoon = faMoon;
  myChevronRight = faChevronRight;
  myChevronLeft = faChevronLeft;
}
