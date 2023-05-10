'use client';

import * as React from 'react';
import listenForOutsideClick from '../../lib/listenForOusideClicks';
import styles from './Dropdown.module.scss';

interface DropdownProps {
  trigger: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  menu: React.ReactElement<any, string | React.JSXElementConstructor<any>>[];
  style?: React.CSSProperties;
}

const Dropdown = ({ trigger, menu }: DropdownProps) => {
  const menuRef = React.useRef(null);
  const [listening, setListening] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleDropdownClick = () => {
    setIsOpen(true);
    setListening(true);
  };

  React.useEffect(
    listenForOutsideClick(listening, setListening, menuRef, setIsOpen)
  );

  return (
    <div className={styles.dropdown}>
      {React.cloneElement(trigger, {
        className: styles.trigger,
        onClick: handleDropdownClick,
      })}
      {isOpen ? (
        <ul className={styles.menu} ref={menuRef}>
          {menu.map((menuItem, index) => (
            <li key={index} className={styles['menu-item']}>
              {React.cloneElement(menuItem, {
                onClick: () => {
                  menuItem.props.onClick();
                  setIsOpen(false);
                },
              })}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Dropdown;
