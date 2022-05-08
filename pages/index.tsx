import * as React from 'react'
import type { NextPage } from 'next'
// import Image from 'next/image'
import style from '../styles/Home.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { Ig } from '../components/icons/ig'
import { Mail } from '../components/icons/mail'
import { Phone } from '../components/icons/phone'

const Home: NextPage = () => {
  return (
    <main className={style.main}>
      <div className={style.logoContainer}>
        <div className={style.logo}>
          <Ig />
        </div>
        <div className={style.logo}>
          <Mail />
        </div>
        <div className={style.logo}>
          <Phone />
        </div>
      </div>
      <div className={style.headingContainer}>
        <span className={style.background}>
          <div className={style.overlay}></div>
          <div className={style.bgImg}>
            <Image src='/lawnbackdrop.jpeg' alt='logo' layout={'fill'} />
          </div>
          <div className={style.fullLogo} >
            <Image src='/full-logo-white.svg' alt='logo' layout={'fill'} />
          </div>
        </span>
      </div>

      <article>
        <div className={style.about}>
          <h3>Professional Lawn Care Servicing Hampton Roads</h3>
          <p>We offer a wide variety of lawn care services ensuring full coverage for all of your lawn and yard maintenance needs in all seasons.</p>
          <p className={style.lastSentence} >Contact us via email, phone or instagram to receive a free quote!</p>
        </div>

      </article>

    </main>
  )
}

export default Home
