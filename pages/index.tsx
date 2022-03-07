import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
// import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      {/* <Navbar /> */}

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hustlin&apos; Lawn Care
        </h1>


      </main>
    </div>
  )
}

export default Home
