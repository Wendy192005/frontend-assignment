import { useState } from 'react';
import styles from '../styles/ToggleMessage.module.css';

const ToggleMessage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className={styles.toggleContainer}>
      <h2 className={styles.toggleTitle}>Toggle Message</h2>
      <button onClick={toggleVisibility} className={styles.toggleButton}>
        {isVisible ? 'Hide Message' : 'Show Message'}
      </button>
      {isVisible && <p className={styles.toggleMessage}>Now i am visible!</p>}
    </div>
  );
};

export default ToggleMessage;
