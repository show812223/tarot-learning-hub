import { useState, useCallback } from 'react';
import type { TarotCard } from '../data/types';
import { allCards } from '../data/cards';

interface DailyDrawRecord {
  date: string;
  cardId: string;
  reversed: boolean;
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

export interface DailyDrawResult {
  card: TarotCard;
  reversed: boolean;
  date: string;
}

export function useDailyDraw() {
  const [records] = useState<DailyDrawRecord[]>(loadRecords);

  const getTodayDraw = useCallback((): DailyDrawResult | null => {
    const today = getTodayStr();
    const rec = loadRecords().find((r) => r.date === today);
    if (!rec) return null;
    const card = allCards.find((c) => c.id === rec.cardId);
    if (!card) return null;
    return { card, reversed: rec.reversed, date: rec.date };
  }, []);

  const drawCard = useCallback((): DailyDrawResult => {
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
  }, []);

  const getHistory = useCallback((): DailyDrawResult[] => {
    return loadRecords()
      .sort((a, b) => b.date.localeCompare(a.date))
      .map((rec) => {
        const card = allCards.find((c) => c.id === rec.cardId);
        if (!card) return null;
        return { card, reversed: rec.reversed, date: rec.date };
      })
      .filter((r): r is DailyDrawResult => r !== null);
  }, []);

  return { getTodayDraw, drawCard, getHistory, records };
}
