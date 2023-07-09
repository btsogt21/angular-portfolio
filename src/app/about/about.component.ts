import { Component, HostBinding, OnInit, OnDestroy} from '@angular/core';
import { ThemeService } from '../theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy{
  isDark = false;
  private darkModeSubscription: Subscription;

  @HostBinding('class.dark-mode') get isDarkMode() {
    return this.isDark;
  }

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
