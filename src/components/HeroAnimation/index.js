import React from 'react';
import clsx from 'clsx';

import styles from './style.module.css';

const randomfromrange = (min, max) => Math.floor(Math.random() * (max - min) + min);

export default function HeroAnimation({ className }) {
  const bullets = Array.from({ length: 10 }, (item, index) => index);
  const crosses = Array.from({ length: 10 }, (item, index) => index);

  return (
    <div className={clsx(styles.HeroAnimation, className)}>
      <div className={styles.BlobGrid} />
      {
        bullets.map((item, index) => {
          const x = randomfromrange(-200, 600);
          const y = randomfromrange(-50, 350);
          const s = randomfromrange(5, 20);
          const l = Math.floor(randomfromrange(20, 100));

          return (
            <div
              className={styles.Bullet}
              key={index + l}
              style={{
                top: y,
                left: x,
                height: s,
                width: s,
                backgroundColor: `hsl(220, 100%, ${l}%)`,
              }}
            />
          );
        })
      }
      {
        crosses.map((item, index) => {
          const x = randomfromrange(-200, 600);
          const y = randomfromrange(-50, 350);
          const s = randomfromrange(5, 20);
          const r = randomfromrange(10, 320);
          const h = Math.floor(randomfromrange(1, 360));

          return (
            <div
              className={styles.Cross}
              key={index + h}
              style={{
                top: y,
                left: x,
                height: s,
                width: s,
                transform: `rotate(${r}deg)`,
                color: `hsl(${h}, 90%, 80%)`,
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M14.7 1.3c-.4-.4-1-.4-1.4 0L8 6.6 2.7 1.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4L6.6 8l-5.3 5.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3s.5-.1.7-.3L8 9.4l5.3 5.3c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L9.4 8l5.3-5.3c.4-.4.4-1 0-1.4z" /></svg>
            </div>
          );
        })
      }

      <div className={styles.Card}>
        <div
          className={styles.One}
        />
        <div
          className={styles.Two}
        />
        <div
          className={styles.Three}
        />
        <div
          className={styles.Four}
        />
      </div>
    </div>
  );
}
