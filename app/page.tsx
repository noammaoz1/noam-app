import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <h2 className={styles.title}>Welcome to My App!</h2>
        <p className={styles.description}>
          Check out some of the assignments I have completed below.
        </p>
      </div>

      {/* Grid container for the assignment cards */}
      <div className={styles.grid}>

        {/* Card 1: Tic-Tac-Toe */}
        <Link href="/tic-tac-toe" className={`${styles.card} ${styles.ticTacToeCard}`}>
          <h2>
            Tic-Tac-Toe <span>&rarr;</span>
          </h2>
          <p>The classic game Tic-Tac-Toe</p>
        </Link>

        {/* Card 2: Art */}
        <Link href="/art" className={`${styles.card} ${styles.artsCard}`}>
          <h2>
            Art <span>&rarr;</span>
          </h2>
          <p>Some Random Cool Arts</p>
        </Link>

        {/* Card 3: design */}
        <Link href="/design" className={`${styles.card} ${styles.designCard}`}>
          <h2>
            Art <span>&rarr;</span>
          </h2>
          <p>Design to code</p>
        </Link>

      </div>
    </main>
  );
}
