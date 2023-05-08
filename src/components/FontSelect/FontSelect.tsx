'use client';

import * as React from 'react';
import Dropdown from '../Dropdown/Dropdown';
import Icon from '@/components/Icon';
import styles from './FontSelect.module.scss';

interface FontSelectProps { }

const updateFontFamily = (font: string): string => {
  switch(font) {
    case 'Sans Serif':
      return 'var(--font-family-sans-serif)';
    case 'Serif':
      return 'var(--font-family-serif)';
    case 'Mono':
      return 'var(--font-family-monospace)';
    default:
      return 'var(--font-family-sans-serif)';
  }
}

const FontSelect = ({ ...rest }: FontSelectProps) => {
  const [fontType, setFontType] = React.useState('Sans Serif');

  const handleSansSerif = () => {
    setFontType('Sans Serif');
    document.documentElement.style.setProperty('font-family', 'var(--font-family-sans-serif)');
    document.documentElement.style.setProperty('--small-underline', 'underline');
  };

  const handleSerif = () => {
    setFontType('Serif');
    document.documentElement.style.setProperty('font-family', 'var(--font-family-serif)');
    document.documentElement.style.setProperty('--small-underline', 'underline');
  };

  const handleMono = () => {
    setFontType('Mono');
    document.documentElement.style.setProperty('font-family', 'var(--font-family-monospace)');
    document.documentElement.style.setProperty('--small-underline', 'none');
  }

  const menu = [
    <button key={'sansSerif'} onClick={handleSansSerif} style={{ fontFamily: 'var(--font-family-sans-serif)' }}>Sans Serif</button>,
    <button key={'serif'} onClick={handleSerif} style={{ fontFamily: 'var(--font-family-serif)' }}>Serif</button>,
    <button key={'monospace'} onClick={handleMono} style={{ fontFamily: 'var(--font-family-monospace)' }} >Mono</button>,
  ];

  let trigger =
    <button style={{ fontFamily: updateFontFamily(fontType) }}>
      {fontType}
      <Icon name="arrow-down" color="var(--color-primary-purple)" height="24px" width="24px" />
    </button>;

  return (
    <div className={styles.wrapper} {...rest}>
      <Dropdown trigger={trigger} menu={menu} />
    </div>
  );
};

export default FontSelect;