'use client';

import * as React from 'react';
import styles from './Dropdown.module.scss';

interface DropdownProps {
  trigger: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  menu: React.ReactElement<any, string | React.JSXElementConstructor<any>>[];
  style?: React.CSSProperties;
}

const Dropdown = ({ trigger, menu }: DropdownProps) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.dropdown}>
      {React.cloneElement(trigger, {
        className: styles.trigger,
        onClick: handleOpen,
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
