import React from 'react';
import clsx from 'clsx';

import style from './style.module.css';

export default function HeroAnimation({ className }) {
  return (
    <div className={clsx(style.HeroAnimation, className)}>
      <div className={style.BlobGrid} />
      <div className={style.Card}>
        <div
          className={style.One}
        />
        <div
          className={style.Two}
        />
        <div
          className={style.Three}
        />
        <div
          className={style.Four}
        />
      </div>
    </div>
  );
}
