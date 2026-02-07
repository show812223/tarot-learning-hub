import { useParams, Link } from 'react-router-dom';
import { getCardById, allCards } from '../data/cards';
import { suitLabels, elementLabels } from '../data/types';
import styles from './CardDetailPage.module.css';

export default function CardDetailPage() {
  const { id } = useParams<{ id: string }>();
  const card = id ? getCardById(id) : undefined;

  if (!card) {
    return (
      <div className={styles.notFound}>
        <h2>找不到這張牌</h2>
        <Link to="/library">返回牌義圖書館</Link>
      </div>
    );
  }

  const suitColorMap: Record<string, string> = {
    major: 'var(--color-major)',
    wands: 'var(--color-wands)',
    cups: 'var(--color-cups)',
    swords: 'var(--color-swords)',
    pentacles: 'var(--color-pentacles)',
  };

  const currentIndex = allCards.findIndex((c) => c.id === card.id);
  const prevCard = currentIndex > 0 ? allCards[currentIndex - 1] : null;
  const nextCard = currentIndex < allCards.length - 1 ? allCards[currentIndex + 1] : null;

  return (
    <div className={styles.page}>
      <div className={styles.breadcrumb}>
        <Link to="/library">牌義圖書館</Link>
        <span className={styles.sep}>/</span>
        <span>{card.name}</span>
      </div>

      <div className={styles.cardHeader}>
        <div
          className={styles.cardVisual}
          style={{ borderColor: suitColorMap[card.suit] }}
        >
          <div className={styles.cardInner}>
            <span className={styles.romanNum}>
              {card.suit === 'major' ? toRoman(card.number) : card.number}
            </span>
            <span className={styles.bigName}>{card.name}</span>
            <span className={styles.bigNameEn}>{card.nameEn}</span>
          </div>
        </div>

        <div className={styles.meta}>
          <h1 className={styles.title}>{card.name}</h1>
          <p className={styles.titleEn}>{card.nameEn}</p>

          <div className={styles.tags}>
            <span
              className={styles.tag}
              style={{
                borderColor: suitColorMap[card.suit],
                color: suitColorMap[card.suit],
              }}
            >
              {suitLabels[card.suit]}
            </span>
            <span className={styles.tag}>
              {elementLabels[card.element]}元素
            </span>
          </div>

          <div className={styles.keywordSection}>
            <h3>正位關鍵字</h3>
            <div className={styles.keywords}>
              {card.keywords.upright.map((k) => (
                <span key={k} className={`${styles.kw} ${styles.kwUpright}`}>
                  {k}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.keywordSection}>
            <h3>逆位關鍵字</h3>
            <div className={styles.keywords}>
              {card.keywords.reversed.map((k) => (
                <span key={k} className={`${styles.kw} ${styles.kwReversed}`}>
                  {k}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.details}>
        <section className={styles.section}>
          <h2>正位牌義</h2>
          <p>{card.description.upright}</p>
        </section>

        <section className={styles.section}>
          <h2>逆位牌義</h2>
          <p>{card.description.reversed}</p>
        </section>

        <section className={styles.section}>
          <h2>圖像象徵</h2>
          <p>{card.symbolism}</p>
        </section>

        <div className={styles.twoCol}>
          <section className={styles.section}>
            <h2>感情解讀</h2>
            <p>{card.love}</p>
          </section>

          <section className={styles.section}>
            <h2>事業解讀</h2>
            <p>{card.career}</p>
          </section>
        </div>
      </div>

      <div className={styles.navCards}>
        {prevCard ? (
          <Link to={`/card/${prevCard.id}`} className={styles.navLink}>
            <span className={styles.navDir}>&larr; 上一張</span>
            <span className={styles.navName}>{prevCard.name}</span>
          </Link>
        ) : (
          <div />
        )}
        {nextCard ? (
          <Link to={`/card/${nextCard.id}`} className={`${styles.navLink} ${styles.navRight}`}>
            <span className={styles.navDir}>下一張 &rarr;</span>
            <span className={styles.navName}>{nextCard.name}</span>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}

function toRoman(num: number): string {
  const vals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const syms = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let result = '';
  for (let i = 0; i < vals.length; i++) {
    while (num >= vals[i]) {
      result += syms[i];
      num -= vals[i];
    }
  }
  return result || '0';
}
