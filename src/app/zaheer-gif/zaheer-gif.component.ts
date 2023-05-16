import { Component, ViewChild, ElementRef, OnInit, OnDestroy} from '@angular/core';
import { ThemeService } from '../theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-zaheer-gif',
  templateUrl: './zaheer-gif.component.html',
  styleUrls: ['./zaheer-gif.component.scss']
})
export class ZaheerGifComponent implements OnInit, OnDestroy{
  isDark = false;
  private darkModeSubscription: Subscription;
  constructor(private themeService: ThemeService) { 
    this.darkModeSubscription = this.themeService.isDarkMode$.subscribe(isDarkMode => {
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
}