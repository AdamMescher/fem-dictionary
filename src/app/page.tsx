import Button from '@/components/Button';
import Icon from '@/components/Icon';
import styles from '../styles/HomePage.module.scss';

export default function Home() {
  return (
    
    <main className={styles.main}>
      <h1>header</h1>
      <p>body text</p>
      <Button><Icon id="moon"/>{' '}button</Button>
    </main>
  );
}
