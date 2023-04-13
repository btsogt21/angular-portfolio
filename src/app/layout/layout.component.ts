import { Component, ViewChild, ElementRef} from '@angular/core';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  isCollapsed = false;
  isDarkMode = false;
  @ViewChild('windContainer') windContainer?: ElementRef;
  openSidebar(){
    this.isCollapsed = false;
    this.showWindEffect(true);
  }
  closeSidebar(){
    this.isCollapsed = true;
    this.showWindEffect(false);
  }
  // toggleSidebar(){
  //   this.isCollapsed = !this.isCollapsed;
  // }
  toggleDarkMode(){
    this.isDarkMode = !this.isDarkMode;
  }
  showWindEffect(visible: boolean){
    if(this.windContainer && this.windContainer.nativeElement){
      this.windContainer.nativeElement.style.display = visible ? 'block' : 'none';
    }
  }

  mySun = faSun;
  myMoon = faMoon;
  myChevronRight = faChevronRight;
  myChevronLeft = faChevronLeft;
}

