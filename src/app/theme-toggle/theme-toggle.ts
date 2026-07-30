import { Component, inject } from '@angular/core';
import { ThemeService } from '../theme/theme';

let nextId = 0;

@Component({
  selector: 'app-theme-toggle',
  imports: [],
  templateUrl: './theme-toggle.html',
  styleUrl: './theme-toggle.scss',
})
export class ThemeToggleComponent {
  protected readonly themeService = inject(ThemeService);
  protected readonly clipId = `theme-toggle-clip-${nextId++}`;

  protected toggleTheme(): void {
    this.themeService.setTheme(this.themeService.theme() === 'dark' ? 'light' : 'dark');
  }
}
