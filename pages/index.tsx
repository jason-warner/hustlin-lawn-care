import * as React from 'react'
import type { NextPage } from 'next'
// import Image from 'next/image'
import style from '../styles/Home.module.scss'
import Link from 'next/link'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <main className={style.main}>

      <div className={style.headingContainer}>
        <h1 className={style.title} > Hustlin&apos; Lawn Care </h1>
        <span className={style.background}>
          <div className={style.overlay}></div>
          <Image src='/lawnbackdrop.jpeg' alt='logo' layout={'fill'} className={style.bgImg} />
        </span>
      </div>

    </main>
  )
}

export default Home
