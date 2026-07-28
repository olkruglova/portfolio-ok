import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card';
import { Card } from './card.model';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  const mockCard: Card = {
    collapseTitle: 'O',
    expandTitle: 'About',
    content: 'This is a card.',
    class: 'card-about',
    bgColor: 'mulberry',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    fixture.componentRef.setInput('card', mockCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
