'use client';

import * as React from 'react';
import styles from './Dropdown.module.scss';

import { useOnClickOutside } from 'usehooks-ts';

interface DropdownProps {
  trigger: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  menu: React.ReactElement<any, string | React.JSXElementConstructor<any>>[];
  style?: React.CSSProperties;
}

function Dropdown({ trigger, menu }: DropdownProps) {
  const [open, setOpen] = React.useState(false);

  const ref = React.useRef(null);

  const handleClickOutside = () => {
    setOpen(false);
  };

  const handleClickInside = () => {
    setOpen(!open);
  };

  useOnClickOutside(ref, handleClickOutside);

  return (
    <div ref={ref} className={styles.dropdown} data-testid='dropdown'>
      {React.cloneElement(trigger, {
        className: styles.trigger,
        onClick: handleClickInside,
      })}
      {open ? (
        <ul className={styles.menu} data-testid='dropdown-menu'>
          {menu.map((menuItem) => (
            <li key={menuItem.key} className={styles['menu-item']}>
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
}

export default Dropdown;
