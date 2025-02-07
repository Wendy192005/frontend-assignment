import { useState, useEffect } from 'react';
import styles from '../styles/ThemeToggle.module.css';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
  console.log('Dark mode is:', isDarkMode ? 'Enabled' : 'Disabled'); // Add this line for debugging
  if (isDarkMode) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={styles.themeContainer}>
      <h1 className={styles.themeTitle}>Theme Toggle</h1>
      <button onClick={toggleTheme} className={styles.themeButton}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  );
};


export default ThemeToggle;
