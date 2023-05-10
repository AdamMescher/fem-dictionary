'use client';

import * as React from 'react';
import Dropdown from '../Dropdown/Dropdown';
import Icon from '@/components/Icon';
import styles from './FontSelect.module.scss';

interface FontSelectProps { }

const FontSelect = ({ ...rest }: FontSelectProps) => {
  const [fontType, setFontType] = React.useState('Sans Serif');

  React.useEffect(() => {
    switch (fontType) {
      case 'Sans Serif':
        document.documentElement.setAttribute('data-font', 'Sans Serif');
        break;
      case 'Serif':
        document.documentElement.setAttribute('data-font', 'Serif');
        break;
      case 'Mono':
        document.documentElement.setAttribute('data-font', 'Mono');
        break;
      default:
        document.documentElement.setAttribute('data-font', 'Sans Serif');
        break;
    }
  }, [fontType])

  const handleSansSerif = () => {
    setFontType('Sans Serif');
  };

  const handleSerif = async () => {
    setFontType('Serif');
  };

  const handleMono = () => {
    setFontType('Mono');
  }

  const menu = [
    <button key={'sansSerif'} onClick={handleSansSerif} style={{ fontFamily: 'var(--font-family-sans-serif)' }}>Sans Serif</button>,
    <button key={'serif'} onClick={handleSerif} style={{ fontFamily: 'var(--font-family-serif)' }}>Serif</button>,
    <button key={'monospace'} onClick={handleMono} style={{ fontFamily: 'var(--font-family-monospace)' }} >Mono</button>,
  ];

  let trigger =
    <button>
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