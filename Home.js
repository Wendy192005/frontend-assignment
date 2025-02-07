import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.homeTitle}>Welcome to My React App!</h1>
      <p className={styles.homeDescription}>
        This is a simple web application demonstrating React, Next.js, and CSS styling.
      </p>
    </div>
  );
};

export default Home;