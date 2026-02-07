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

export const suitColors: Record<Suit, string> = {
  major: '#9b59b6',
  wands: '#e74c3c',
  cups: '#3498db',
  swords: '#95a5a6',
  pentacles: '#f39c12',
};
