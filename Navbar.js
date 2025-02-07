import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    
    <nav className={styles.navbar}>
      <Link href="/" className={styles.link}>Home</Link>
      <Link href="/signin" className={styles.link}>Sign In</Link>
      <Link href="/theme" className={styles.link}>Theme Toggle</Link>
     
    </nav>
  );
};

export default Navbar;
