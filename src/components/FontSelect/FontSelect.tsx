'use client';

import * as React from 'react';
import Dropdown from '@/components/Dropdown';
import Icon from '@/components/Icon';
import styles from './FontSelect.module.scss';

interface FontSelectProps {}

function FontSelect({ ...rest }: FontSelectProps) {
  const [fontType, setFontType] = React.useState('Sans Serif');
  const [fontSelectDropdownIsOpen, setFontSelectDropdownIsOpen] =
    React.useState(false);

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
  }, [fontType]);

  const handleFontSelectDropdownOpen = () => {
    setFontSelectDropdownIsOpen(!fontSelectDropdownIsOpen);
  };

  const handleSansSerif = () => {
    setFontType('Sans Serif');
  };

  const handleSerif = async () => {
    setFontType('Serif');
  };

  const handleMono = () => {
    setFontType('Mono');
  };

  const menu = [
    <button
      key='sansSerif'
      type='button'
      onClick={handleSansSerif}
      style={{ fontFamily: 'var(--font-family-sans-serif)' }}
    >
      Sans Serif
    </button>,
    <button
      key='serif'
      type='button'
      onClick={handleSerif}
      style={{ fontFamily: 'var(--font-family-serif)' }}
    >
      Serif
    </button>,
    <button
      key='monospace'
      type='button'
      onClick={handleMono}
      style={{ fontFamily: 'var(--font-family-monospace)' }}
    >
      Mono
    </button>,
  ];

  const trigger = (
    <button type='button'>
      {fontType}
      <Icon
        name='arrow-down'
        color='var(--color-primary-purple)'
        height='24px'
        width='24px'
      />
    </button>
  );

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div className={styles.wrapper} data-testid='font-select' {...rest}>
      <Dropdown
        trigger={trigger}
        menu={menu}
        open={fontSelectDropdownIsOpen}
        setOpen={setFontSelectDropdownIsOpen}
      />
    </div>
  );
}

export default FontSelect;
