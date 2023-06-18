'use client';

import * as React from 'react';
import styles from './Dropdown.module.scss';

interface DropdownProps {
  trigger: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  menu: React.ReactElement<any, string | React.JSXElementConstructor<any>>[];
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleOpen?: () => void;
  handleOutsideClick: (e: MouseEvent | TouchEvent) => void;
  style?: React.CSSProperties;
}

const Dropdown = ({
  trigger,
  menu,
  open,
  setOpen,
  handleOutsideClick,
}: DropdownProps) => {
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const handleDropdownClick = () => setOpen(!open);

  React.useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  });

  return (
    <div ref={dropdownRef} className={styles.dropdown} data-testid='dropdown'>
      {React.cloneElement(trigger, {
        className: styles.trigger,
        onClick: handleDropdownClick,
      })}
      {open ? (
        <ul className={styles.menu}>
          {menu.map((menuItem, index) => (
            <li key={index} className={styles['menu-item']}>
              {React.cloneElement(menuItem, {
                onClick: () => {
                  menuItem.props.onClick();
                  setOpen(false);
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
