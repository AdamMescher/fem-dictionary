import * as React from 'react';
import styles from './BookFlip.module.scss';

const BookFlip = () => {
  return (
    <div className={styles.book} data-testid="book-flip">
      <div className={styles.inner}>
        <div className={styles.left}></div>
        <div className={styles.middle}></div>
        <div className={styles.right}></div>
      </div>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default BookFlip;
