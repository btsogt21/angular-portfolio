import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkModeSubject = new BehaviorSubject<boolean>(false);
  isDarkMode$ = this.isDarkModeSubject.asObservable();
  constructor() { }
  toggleDarkMode(): void {
    this.isDarkModeSubject.next(!this.isDarkModeSubject.value);
  }
  setDarkMode(isDarkMode: boolean): void {
    this.isDarkModeSubject.next(isDarkMode);
  }
  getDarkMode(): boolean {
    return this.isDarkModeSubject.value;
  }
}
