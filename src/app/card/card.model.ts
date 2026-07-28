export type CardBgColor = 'mulberry' | 'black-plum' | 'black-cherry' | 'deep-indigo';

export interface Card {
  collapseTitle: string;
  expandTitle: string;
  content: string;
  class: string;
  bgColor: CardBgColor;
}
