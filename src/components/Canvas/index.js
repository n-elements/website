import React from 'react';
import PortalFrame from 'react-portal-frame';
import clsx from 'clsx';
import styles from './canvas.module.css';

export function Canvas({
  children,
  height,
  style,
  className,
  ...attributes
}) {
  const head = `
    <link rel="preconnect" href="https://cdn.jsdelivr.net">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@native-elements/core@1.2.5/native-elements.css">
    <script src="https://cdn.jsdelivr.net/npm/what-input@5.2.9/dist/what-input.min.js" defer></script>
    <style>
      body {
        padding: 24px;
      }

      [data-whatintent="mouse"] *:focus,
      [data-whatintent="touch"] *:focus {
        outline: none;
      }

      ${style || ''}
    </style>
  `;

  return (
    <PortalFrame
      className={clsx(styles.Canvas, className)}
      style={{ height: height ? `${height}px` : 'auto', }}
      head={head}
      {...attributes}
    >
      {children}
    </PortalFrame>
  );
}
