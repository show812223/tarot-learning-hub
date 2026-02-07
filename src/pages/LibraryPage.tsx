import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { allCards } from '../data/cards';
import { type Suit, suitLabels } from '../data/types';
import styles from './LibraryPage.module.css';

type FilterType = 'all' | 'major' | 'minor';
type SuitFilter = 'all' | Suit;

export default function LibraryPage() {
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState<FilterType>('all');
  const [suitFilter, setSuitFilter] = useState<SuitFilter>('all');

  const filteredCards = useMemo(() => {
    let cards = allCards;

    if (search.trim()) {
      const q = search.toLowerCase();
      cards = cards.filter(
        (c) =>
          c.name.includes(q) ||
          c.nameEn.toLowerCase().includes(q) ||
          c.keywords.upright.some((k) => k.includes(q)) ||
          c.keywords.reversed.some((k) => k.includes(q)) ||
          c.love.includes(q) ||
          c.career.includes(q)
      );
    }

    if (typeFilter === 'major') {
      cards = cards.filter((c) => c.suit === 'major');
    } else if (typeFilter === 'minor') {
      cards = cards.filter((c) => c.suit !== 'major');
    }

    if (suitFilter !== 'all') {
      cards = cards.filter((c) => c.suit === suitFilter);
    }

    return cards;
  }, [search, typeFilter, suitFilter]);

  const suitColorMap: Record<string, string> = {
    major: 'var(--color-major)',
    wands: 'var(--color-wands)',
    cups: 'var(--color-cups)',
    swords: 'var(--color-swords)',
    pentacles: 'var(--color-pentacles)',
  };

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1>牌義圖書館</h1>
        <p>探索 78 張塔羅牌的完整含義</p>
      </div>

      <div className={styles.controls}>
        <div className={styles.searchBox}>
          <span className={styles.searchIcon}>&#x26B2;</span>
          <input
            type="text"
            placeholder="搜尋牌名、關鍵字、愛情、事業..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={styles.searchInput}
          />
          {search && (
            <button className={styles.clearBtn} onClick={() => setSearch('')}>
              &times;
            </button>
          )}
        </div>

        <div className={styles.filters}>
          <div className={styles.filterGroup}>
            <button
              className={`${styles.filterBtn} ${typeFilter === 'all' ? styles.active : ''}`}
              onClick={() => { setTypeFilter('all'); setSuitFilter('all'); }}
            >
              全部
            </button>
            <button
              className={`${styles.filterBtn} ${typeFilter === 'major' ? styles.active : ''}`}
              onClick={() => { setTypeFilter('major'); setSuitFilter('all'); }}
            >
              大阿爾克那
            </button>
            <button
              className={`${styles.filterBtn} ${typeFilter === 'minor' ? styles.active : ''}`}
              onClick={() => setTypeFilter('minor')}
            >
              小阿爾克那
            </button>
          </div>

          {typeFilter === 'minor' && (
            <div className={styles.filterGroup}>
              <button
                className={`${styles.filterBtn} ${suitFilter === 'all' ? styles.active : ''}`}
                onClick={() => setSuitFilter('all')}
              >
                全部花色
              </button>
              {(['wands', 'cups', 'swords', 'pentacles'] as Suit[]).map((s) => (
                <button
                  key={s}
                  className={`${styles.filterBtn} ${suitFilter === s ? styles.active : ''}`}
                  onClick={() => setSuitFilter(s)}
                  style={
                    suitFilter === s
                      ? { borderColor: suitColorMap[s], color: suitColorMap[s] }
                      : {}
                  }
                >
                  {suitLabels[s]}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className={styles.count}>
        共 {filteredCards.length} 張牌
      </div>

      <div className={styles.grid}>
        {filteredCards.map((card) => (
          <Link
            key={card.id}
            to={`/card/${card.id}`}
            className={styles.card}
          >
            <div
              className={styles.cardTop}
              style={{ borderColor: suitColorMap[card.suit] }}
            >
              <span
                className={styles.cardNumber}
                style={{ color: suitColorMap[card.suit] }}
              >
                {card.suit === 'major'
                  ? card.number.toString().padStart(2, '0')
                  : suitLabels[card.suit]}
              </span>
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardName}>{card.name}</h3>
              <p className={styles.cardNameEn}>{card.nameEn}</p>
              <div className={styles.keywords}>
                {card.keywords.upright.slice(0, 3).map((k) => (
                  <span key={k} className={styles.keyword}>{k}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredCards.length === 0 && (
        <div className={styles.empty}>
          <p>找不到符合條件的牌</p>
          <button
            className={styles.resetBtn}
            onClick={() => {
              setSearch('');
              setTypeFilter('all');
              setSuitFilter('all');
            }}
          >
            重設篩選
          </button>
        </div>
      )}
    </div>
  );
}
