import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from '../card/card';
import { Card } from '../card/card.model';

@Component({
  selector: 'app-main',
  imports: [RouterOutlet, CardComponent],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class MainComponent {
  cards = signal<Card[]>([
    {
      collapseTitle: 'O',
      expandTitle: 'About',
      content: 'This is the first card.',
      class: 'card-about',
      bgColor: 'mulberry',
    },
    {
      collapseTitle: 'L',
      expandTitle: 'Skills & Stack',
      content: 'This is the second card.',
      class: 'card-skills',
      bgColor: 'black-plum',
    },
    {
      collapseTitle: 'G',
      expandTitle: 'Gallery',
      content: 'This is the third card.',
      class: 'card-gallery',
      bgColor: 'black-cherry',
    },
    {
      collapseTitle: 'A',
      expandTitle: 'Contact',
      content: 'This is the fourth card.',
      class: 'card-contact',
      bgColor: 'deep-indigo',
    },
  ]);
}
