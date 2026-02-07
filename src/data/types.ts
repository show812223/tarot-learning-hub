export type Suit = 'major' | 'wands' | 'cups' | 'swords' | 'pentacles';

export type Element = 'fire' | 'water' | 'air' | 'earth' | 'spirit';

export interface TarotCard {
  id: string;
  number: number;
  name: string;
  nameEn: string;
  suit: Suit;
  element: Element;
  keywords: {
    upright: string[];
    reversed: string[];
  };
  description: {
    upright: string;
    reversed: string;
  };
  symbolism: string;
  love: string;
  career: string;
}

export const suitLabels: Record<Suit, string> = {
  major: '大阿爾克那',
  wands: '權杖',
  cups: '聖杯',
  swords: '寶劍',
  pentacles: '星幣',
};

export const elementLabels: Record<Element, string> = {
  fire: '火',
  water: '水',
  air: '風',
  earth: '土',
  spirit: '靈',
};

export const suitToElement: Record<Suit, Element> = {
  major: 'spirit',
  wands: 'fire',
  cups: 'water',
  swords: 'air',
  pentacles: 'earth',
};
