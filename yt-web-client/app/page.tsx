import styles from './page.module.css';
import Upload from './upload';

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <Upload />
      </main>
    </div>
  );
}
