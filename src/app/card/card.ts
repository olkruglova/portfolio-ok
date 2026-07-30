import { Component, computed, inject, input } from '@angular/core';
import { Card } from './card.model';
import { ContactModalState } from '../contact/contact-modal-state';

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
  private readonly contactModalState = inject(ContactModalState);

  card = input.required<Card>();
  index = input<number>(0);

  protected readonly hostClass = computed(() => {
    const classes = [this.card().class, `bg-${this.card().bgColor}`];
    if (this.card().contactForm && this.contactModalState.isOpen()) {
      classes.push('is-open');
    }
    return classes.join(' ');
  });

  protected openContactModal(): void {
    this.contactModalState.open();
  }

  protected readonly expandLetters = computed<ExpandLetter[]>(() => {
    const title = this.card().expandTitle;
    const anchorIndex = title.toLowerCase().indexOf(this.card().collapseTitle.toLowerCase());
    return title.split('').map((char, i) => ({ char, isAnchor: i === anchorIndex }));
  });
}
