import { Component, OnInit, OnDestroy} from '@angular/core';
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
  toggleDarkMode(): void{
    this.themeService.toggleDarkMode();
  }
  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.darkModeSubscription.unsubscribe();
  }
}