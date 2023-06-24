import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // isDark = false;
  
  // private darkModeSubscription: Subscription;
  // constructor(private themeService: ThemeService) { 
  //   this.darkModeSubscription = this.themeService.isDarkMode$.subscribe(isDarkMode => {
  //     this.isDark = isDarkMode;
  //   });
  // }
  // toggleDarkMode(): void{
  //   this.themeService.toggleDarkMode();
  // }
  // ngOnInit(): void {

  // }

  // ngOnDestroy(): void {
  //   this.darkModeSubscription.unsubscribe();
  // }

}
