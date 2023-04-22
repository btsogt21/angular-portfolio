import { Component, ViewChild, ElementRef, OnInit, OnDestroy} from '@angular/core';
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
  isDark = false;
  private darkModeSubscription: Subscription;
  constructor(private themeService: ThemeService) { 
    this.darkModeSubscription = this.themeService.isDarkMode$.subscribe(isDarkMode => {
      this.isDark = isDarkMode;
    });
    this.themeService.isDarkMode$.subscribe(isDarkMode => {
      this.isDark = isDarkMode;
    });
  }
  isCollapsed = false;
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
  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.darkModeSubscription.unsubscribe();
  }

  toggleSidebar(){
    this.isCollapsed = !this.isCollapsed;
    this.showWindEffect(this.isCollapsed);
  }
  // toggleDarkMode(){
  //   this.isDarkMode = !this.isDarkMode;
  // }
  @ViewChild('windContainer') windContainer?: ElementRef;
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

