import Head from 'next/head'
import Image from 'next/image'
import Topnav from '../components/navbar/Topnav'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Myntra responsive UI</title>
        <meta name="description" content="Generated by create next app" />
        <script src="https://kit.fontawesome.com/79dfc2e9eb.js" crossorigin="anonymous"></script>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Topnav />
        Hello
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
