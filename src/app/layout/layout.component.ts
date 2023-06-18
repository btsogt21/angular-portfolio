import { Component, ViewChild, ElementRef, OnInit, OnDestroy, HostListener} from '@angular/core';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from '../theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  isCollapsed = false;
  isDark = false;
  isExpandDownwards = false;
  lastResizeWidth = 0;
  expandDownwardsWrapper = false;
  private darkModeSubscription: Subscription;
  constructor(private themeService: ThemeService) { 
    this.darkModeSubscription = this.themeService.isDarkMode$.subscribe(isDarkMode => {
      this.isDark = isDarkMode;
    });
  }
  // openSidebar(){
  //   this.isCollapsed = false;
  //   this.showWindEffect(true);
  // }
  // closeSidebar(){
  //   this.isCollapsed = true;
  //   this.showWindEffect(false);
  // }
  toggleDarkMode(): void{
    this.themeService.toggleDarkMode();
  }
  ngOnInit(): void {
    this.onResize();
  }
  ngOnDestroy(): void {
    this.darkModeSubscription.unsubscribe();
  }

  toggleSidebar(){
    let outerContainerElement = document.querySelector('.outer-container');
    let outerContainerWidth = outerContainerElement ? outerContainerElement.getBoundingClientRect().width : 0;
    if (!this.isCollapsed && outerContainerWidth <= 444){
      this.isExpandDownwards = true;
    }
    else if (outerContainerWidth<=444 && this.isExpandDownwards){
      this.isExpandDownwards = false;
    }
    else if (!this.isCollapsed && outerContainerWidth > 444){
      this.isExpandDownwards = false; // experiment with what happens when getting rid of this line (can the expandDownwards state be remembered as true safely?)
      this.isCollapsed = true;
    }
    else if (outerContainerWidth>444 && this.isCollapsed){
      this.isCollapsed = false;
    }
    // this.isCollapsed = !this.isCollapsed;
    // this.showWindEffect(this.isCollapsed);
  }
  // toggleDarkMode(){
  //   this.isDarkMode = !this.isDarkMode;
  // }
  // @ViewChild('windContainer') windContainer?: ElementRef;
  // showWindEffect(visible: boolean){
  //   if(this.windContainer && this.windContainer.nativeElement){
  //     this.windContainer.nativeElement.style.display = visible ? 'block' : 'none';
  //   }
  // }

  // 2023-05-31, 2:18 PM EST: 
  // this function was directly referencing the DOM in order to try and collapse the sidebar after the arrow-container
  // began to clip outside of the page. This might not be best practice, and it also made it difficult to ellegantly
  // implement the reopening functionality while still maintaning the closing functioality.
  // Had to end up going with a rather brutish method of just checking whether the outercontainer width had reached 
  // the exact point at which the arrow-container begins to clip out the page. 
  // Might comment this function out at some point in order to replace it with Media queries that follow a strict
  // screen width regime for the sidebar. This would help avoid the issue of the sidebar opening itself up when the
  // screen width is above 444 despite the user wanting to keep it closed.

  // 2023-06-14, 3:09 PM EST:
  // Update: I have removed the auto open functionality from the below. Seems rather redundant in hindsight.
  @HostListener('window:resize')
  onResize(event?: Event) {
    // let arrowContainerElement = document.querySelector('.arrow-container');
    // // let sidebarElement = document.querySelector('.sidebar');
    let outerContainerElement = document.querySelector('.outer-container');
    if (outerContainerElement) {
      // let arrowContainerOffset = arrowContainerElement.getBoundingClientRect().left;
      // console.log(arrowContainerOffset);
      let outerContainerWidth = outerContainerElement.getBoundingClientRect().width;
      console.log(outerContainerWidth);
      if (outerContainerWidth <=444 && this.isCollapsed && this.lastResizeWidth > 444) {
        this.isCollapsed = false;
        // this.expandDownwards = false;
      }
      this.lastResizeWidth = outerContainerWidth;
      // this.expandDownwardsWrapper = outerContainerWidth <= 444;
    }
  }

  mySun = faSun;
  myMoon = faMoon;
  myChevronRight = faChevronRight;
  myChevronLeft = faChevronLeft;
}

