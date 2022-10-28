import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MainPage from './MainPage'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextNode Blog</title>
        <meta name="description" content="NextNode Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainPage />
    </div>
  )
}
