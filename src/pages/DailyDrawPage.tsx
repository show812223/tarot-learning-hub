import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useDailyDraw, type DailyDrawResult } from '../hooks/useDailyDraw';
import styles from './DailyDrawPage.module.css';

export default function DailyDrawPage() {
  const { drawCard, getTodayDraw, getHistory } = useDailyDraw();
  const [result, setResult] = useState<DailyDrawResult | null>(getTodayDraw);
  const [isFlipping, setIsFlipping] = useState(false);
  const [showCard, setShowCard] = useState(!!getTodayDraw());
  const [showHistory, setShowHistory] = useState(false);

  const handleDraw = useCallback(() => {
    if (isFlipping) return;
    setIsFlipping(true);
    setShowCard(false);

    setTimeout(() => {
      const drawn = drawCard();
      setResult(drawn);
      setShowCard(true);
      setTimeout(() => setIsFlipping(false), 600);
    }, 400);
  }, [drawCard, isFlipping]);

  const history = getHistory();

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1>每日一抽</h1>
        <p>抽取一張塔羅牌作為今日指引</p>
      </div>

      <div className={styles.drawArea}>
        <div className={`${styles.cardContainer} ${isFlipping ? styles.flipping : ''}`}>
          {!showCard ? (
            <div className={styles.cardBack}>
              <div className={styles.backInner}>
                <div className={styles.backBorder}>
                  <div className={styles.starPattern}>
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className={styles.ray}
                        style={{ transform: `rotate(${i * 45}deg)` }}
                      />
                    ))}
                  </div>
                  <div className={styles.moonSymbol}>☽</div>
                </div>
              </div>
            </div>
          ) : result ? (
            <Link to={`/card/${result.card.id}`} className={styles.cardFront}>
              <div className={styles.frontInner}>
                {result.reversed && (
                  <div className={styles.reversedBadge}>逆位</div>
                )}
                <span className={styles.cardNum}>
                  {result.card.suit === 'major'
                    ? `${result.card.number}`
                    : result.card.nameEn.split(' ').pop()}
                </span>
                <span className={styles.cardTitle}>{result.card.name}</span>
                <span className={styles.cardTitleEn}>{result.card.nameEn}</span>
              </div>
            </Link>
          ) : null}
        </div>

        {!result ? (
          <button className={styles.drawBtn} onClick={handleDraw}>
            抽牌
          </button>
        ) : (
          <p className={styles.tapHint}>點擊牌面查看完整解讀</p>
        )}
      </div>

      {result && (
        <div className={styles.resultSection}>
          <h2>
            今日指引 — {result.card.name}
            {result.reversed && <span className={styles.revLabel}>（逆位）</span>}
          </h2>

          <div className={styles.keywordsRow}>
            <div>
              <h4>{result.reversed ? '逆位關鍵字' : '正位關鍵字'}</h4>
              <div className={styles.keywords}>
                {(result.reversed
                  ? result.card.keywords.reversed
                  : result.card.keywords.upright
                ).map((k) => (
                  <span key={k} className={styles.kw}>{k}</span>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.meaning}>
            <p>
              {result.reversed
                ? result.card.description.reversed
                : result.card.description.upright}
            </p>
          </div>

          <Link to={`/card/${result.card.id}`} className={styles.detailLink}>
            查看完整牌義 &rarr;
          </Link>
        </div>
      )}

      {history.length > 1 && (
        <div className={styles.historySection}>
          <button
            className={styles.historyToggle}
            onClick={() => setShowHistory(!showHistory)}
          >
            {showHistory ? '收起' : '展開'}抽牌紀錄 ({history.length})
          </button>

          {showHistory && (
            <div className={styles.historyList}>
              {history.map((rec) => (
                <Link
                  key={rec.date}
                  to={`/card/${rec.card.id}`}
                  className={styles.historyItem}
                >
                  <span className={styles.histDate}>{rec.date}</span>
                  <span className={styles.histName}>
                    {rec.card.name}
                    {rec.reversed && ' (逆位)'}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
