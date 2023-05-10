'use client';

import * as React from 'react';
import styles from './Dropdown.module.scss';

interface DropdownProps {
  trigger: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  menu: React.ReactElement<any, string | React.JSXElementConstructor<any>>[];
  style?: React.CSSProperties;
}

const Dropdown = ({ trigger, menu }: DropdownProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const handleDropdownClick = () => setIsOpen(!isOpen);
  const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  });

  return (
    <div ref={dropdownRef} className={styles.dropdown}>
      {React.cloneElement(trigger, {
        className: styles.trigger,
        onClick: handleDropdownClick,
      })}
      {isOpen ? (
        <ul className={styles.menu}>
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
