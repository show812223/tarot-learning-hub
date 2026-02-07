import type { TarotCard } from './types';
import { majorArcana } from './majorArcana';
import { wands } from './wands';
import { cups } from './cups';
import { swords } from './swords';
import { pentacles } from './pentacles';

export const allCards: TarotCard[] = [
  ...majorArcana,
  ...wands,
  ...cups,
  ...swords,
  ...pentacles,
];

export function getCardById(id: string): TarotCard | undefined {
  return allCards.find((card) => card.id === id);
}

export function searchCards(query: string): TarotCard[] {
  const q = query.toLowerCase();
  return allCards.filter(
    (card) =>
      card.name.toLowerCase().includes(q) ||
      card.nameEn.toLowerCase().includes(q) ||
      card.keywords.upright.some((k) => k.includes(q)) ||
      card.keywords.reversed.some((k) => k.includes(q)) ||
      card.description.upright.includes(q) ||
      card.description.reversed.includes(q) ||
      card.love.includes(q) ||
      card.career.includes(q)
  );
}
