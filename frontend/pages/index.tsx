import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Button from '@components/Button';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>hello idris</h1>
    </div>
  );
};

export default Home;
