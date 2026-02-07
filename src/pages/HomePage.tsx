import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroDecor}>
          {[...Array(20)].map((_, i) => (
            <span
              key={i}
              className={styles.star}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
        <h1 className={styles.title}>塔羅學習小站</h1>
        <p className={styles.subtitle}>
          探索 78 張塔羅牌的奧秘，開啟你的直覺之旅
        </p>
        <div className={styles.actions}>
          <Link to="/library" className={styles.btnPrimary}>
            瀏覽牌義圖書館
          </Link>
          <Link to="/daily" className={styles.btnSecondary}>
            每日一抽
          </Link>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.feature}>
          <div className={styles.featureIcon}>&#x2727;</div>
          <h3>牌義圖書館</h3>
          <p>完整收錄 22 張大阿爾克那與 56 張小阿爾克那，含正逆位解說。</p>
        </div>
        <div className={styles.feature}>
          <div className={styles.featureIcon}>&#x2728;</div>
          <h3>每日一抽</h3>
          <p>每天隨機抽取一張塔羅牌作為今日指引，搭配翻牌動畫效果。</p>
        </div>
        <div className={styles.feature}>
          <div className={styles.featureIcon}>&#x2726;</div>
          <h3>關鍵字搜尋</h3>
          <p>輸入關鍵字快速搜尋牌名或含義，如「愛情」、「事業」。</p>
        </div>
      </section>

      <section className={styles.intro}>
        <h2>什麼是塔羅牌？</h2>
        <p>
          塔羅牌是一套由 78
          張牌組成的占卜工具，分為大阿爾克那（Major Arcana）22 張與小阿爾克那（Minor
          Arcana）56 張。大阿爾克那描繪人生重大主題，小阿爾克那則反映日常生活細節。
        </p>
        <div className={styles.suitGrid}>
          <div className={styles.suitItem} style={{ borderColor: 'var(--color-wands)' }}>
            <span className={styles.suitIcon} style={{ color: 'var(--color-wands)' }}>
              &#x2660;
            </span>
            <strong>權杖（火）</strong>
            <span>行動、熱情、創造</span>
          </div>
          <div className={styles.suitItem} style={{ borderColor: 'var(--color-cups)' }}>
            <span className={styles.suitIcon} style={{ color: 'var(--color-cups)' }}>
              &#x2665;
            </span>
            <strong>聖杯（水）</strong>
            <span>情感、直覺、關係</span>
          </div>
          <div className={styles.suitItem} style={{ borderColor: 'var(--color-swords)' }}>
            <span className={styles.suitIcon} style={{ color: 'var(--color-swords)' }}>
              &#x2666;
            </span>
            <strong>寶劍（風）</strong>
            <span>思考、衝突、真相</span>
          </div>
          <div className={styles.suitItem} style={{ borderColor: 'var(--color-pentacles)' }}>
            <span className={styles.suitIcon} style={{ color: 'var(--color-pentacles)' }}>
              &#x2663;
            </span>
            <strong>星幣（土）</strong>
            <span>物質、金錢、務實</span>
          </div>
        </div>
      </section>
    </div>
  );
}
