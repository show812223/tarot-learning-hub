import styles from './CardBack.module.css';

interface CardBackProps {
  size?: 'sm' | 'md' | 'lg';
}

export default function CardBack({ size = 'md' }: CardBackProps) {
  return (
    <div className={`${styles.cardBack} ${styles[size]}`}>
      <div className={styles.inner}>
        <div className={styles.border}>
          <div className={styles.pattern}>
            <div className={styles.star}>
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className={styles.ray}
                  style={{ transform: `rotate(${i * 45}deg)` }}
                />
              ))}
            </div>
            <div className={styles.moon}>☽</div>
          </div>
        </div>
      </div>
    </div>
  );
}
