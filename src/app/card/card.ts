import { Component, computed, input } from '@angular/core';
import { Card } from './card.model';

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
}
