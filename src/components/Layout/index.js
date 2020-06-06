import React from 'react';
import styles from './layout.module.css';

export const Layout = (props) => {
  const {
    children,
    direction = 'vertical',
    display = 'grid',
    gap = '24px',
    minHeight = '100px',
    repeat = 'fit',
    columnWidth = 'auto',
    padding = '24px',
    align = 'space-evenly',
    theme = 'light',
  } = props;
  return (
    <div
      className={styles.Layout}
      data-display={display}
      data-repeat={repeat}
      data-theme={theme}
      data-direction={direction}
      style={{
        '--minHeight': minHeight,
        '--gap': gap,
        '--padding': padding,
        '--columnWidth': columnWidth,
        '--align': align,
      }}
    >
      {children}
    </div>
  );
};
