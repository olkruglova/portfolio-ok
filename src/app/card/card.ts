import { Component, computed, input } from '@angular/core';
import { Card } from './card.model';

interface ExpandLetter {
  char: string;
  isAnchor: boolean;
}

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
  host: {
    '[class]': 'hostClass()',
  },
})
export class CardComponent {
  card = input.required<Card>();
  index = input<number>(0);

  protected readonly hostClass = computed(() => `${this.card().class} bg-${this.card().bgColor}`);

  protected readonly expandLetters = computed<ExpandLetter[]>(() => {
    const title = this.card().expandTitle;
    const anchorIndex = title.toLowerCase().indexOf(this.card().collapseTitle.toLowerCase());
    return title.split('').map((char, i) => ({ char, isAnchor: i === anchorIndex }));
  });
}
