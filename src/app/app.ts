import { Component, inject, signal } from '@angular/core';
import { MainComponent } from './main/main';
import { ThemeService } from './theme/theme';

@Component({
  selector: 'app-root',
  imports: [MainComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly themeService = inject(ThemeService);

  protected readonly name = signal('Olga');
  protected readonly secondName = signal('Kruglova');
  protected readonly theme = this.themeService.theme;
}
