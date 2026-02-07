import type { TarotCard } from '~/data/types';
import { allCards } from '~/data/cards';

interface DailyDrawRecord {
  date: string;
  cardId: string;
  reversed: boolean;
}

export interface DailyDrawResult {
  card: TarotCard;
  reversed: boolean;
  date: string;
}

const STORAGE_KEY = 'tarot-daily-draws';

function getTodayStr(): string {
  return new Date().toISOString().slice(0, 10);
}

function loadRecords(): DailyDrawRecord[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveRecords(records: DailyDrawRecord[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
}

export function useDailyDraw() {
  function getTodayDraw(): DailyDrawResult | null {
    const today = getTodayStr();
    const rec = loadRecords().find((r) => r.date === today);
    if (!rec) return null;
    const card = allCards.find((c) => c.id === rec.cardId);
    if (!card) return null;
    return { card, reversed: rec.reversed, date: rec.date };
  }

  function drawCard(): DailyDrawResult {
    const today = getTodayStr();
    const existing = loadRecords().find((r) => r.date === today);
    if (existing) {
      const card = allCards.find((c) => c.id === existing.cardId)!;
      return { card, reversed: existing.reversed, date: today };
    }

    const randomIndex = Math.floor(Math.random() * allCards.length);
    const card = allCards[randomIndex];
    const reversed = Math.random() < 0.3;

    const allRecords = loadRecords();
    allRecords.push({ date: today, cardId: card.id, reversed });
    saveRecords(allRecords);

    return { card, reversed, date: today };
  }

  function getHistory(): DailyDrawResult[] {
    return loadRecords()
      .sort((a, b) => b.date.localeCompare(a.date))
      .map((rec) => {
        const card = allCards.find((c) => c.id === rec.cardId);
        if (!card) return null;
        return { card, reversed: rec.reversed, date: rec.date };
      })
      .filter((r): r is DailyDrawResult => r !== null);
  }

  return { getTodayDraw, drawCard, getHistory };
}
