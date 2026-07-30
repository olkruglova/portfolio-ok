export type CardBgColor = 'mulberry' | 'black-plum' | 'black-cherry' | 'deep-indigo';

export type SocialPlatform = 'facebook' | 'linkedin' | 'github';

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
}

export interface Card {
  collapseTitle: string;
  expandTitle: string;
  content: string | null;
  class: string;
  bgColor: CardBgColor;
  links?: SocialLink[];
  contactForm?: boolean;
}
