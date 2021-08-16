import React, { useState } from 'react';
import { Helmet as Head } from 'react-helmet-async';
import logo from '../assets/logo.svg';
import styles from '../styles/Home.module.css';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <Head>
        <title>Vite + React</title>
      </Head>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button
            type="button"
            onClick={() => setCount((prevCount) => prevCount + 1)}
          >
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className={styles.link}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className={styles.link}
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default Home;
