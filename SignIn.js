import { useState } from 'react';
import styles from '../styles/SignIn.module.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      setMessage(`Welcome, ${email}!`);
    } else {
      setMessage('Please fill in all fields.');
    }
  };

  return (
    <div className={styles.signInContainer}>
      <h1 className={styles.signInTitle}>Sign In</h1>
      <form onSubmit={handleSubmit} className={styles.signInForm}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Sign In</button>
      </form>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};

export default SignIn;
