'use client';

import * as React from 'react';
import Icon from '@/components/Icon';
import styles from './FontSelect.module.scss';

interface FontSelectProps { }

const FontSelect = ({ ...rest }: FontSelectProps) => {
  const [fontType, setFontType] = React.useState('Sans Serif');

  return (
    <div className={styles.wrapper} data-testid="font-select" {...rest} >
      <select className={styles['native-select']} value={fontType} onChange={(event: React.ChangeEvent) => {
        setFontType(event.target.value);

        if (event.target.value === 'Sans Serif') {
          document.documentElement.style.setProperty('font-family', 'var(--font-family-sans-serif)');
        } else if (event.target.value === 'Serif') {
          document.documentElement.style.setProperty('font-family', 'var(--font-family-serif)');
        } else if (event.target.value === 'Mono') {
          document.documentElement.style.setProperty('font-family', 'var(--font-family-monospace)');
        }
      }}>
        <option>Sans Serif</option>
        <option>Serif</option>
        <option>Mono</option>
      </select>
      <div className={styles.presentational}>
        {fontType}
        <Icon id="arrow-down" color={'var(--color-primary-purple)'} height={'16px'} width={'16px'} />
      </div>
    </div>
  );
}

export default FontSelect;