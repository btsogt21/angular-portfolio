import { Component, HostBinding, OnInit, OnDestroy} from '@angular/core';
import { ThemeService } from './theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
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
