import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">Home</Link>
      <Link href="/tasklist">Task List</Link>
      <Link href="/toggle">Toggle Message</Link>
    </nav>
  );
};

export default Navbar;
