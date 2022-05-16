import * as React from 'react'
import type { NextPage } from 'next'
import style from '../styles/Home.module.scss'
import Image from 'next/image'
import BottomNav from '../components/BottomNav';


const Home: NextPage = () => {
  return (
    <> 
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

      <article className={style.article}>
        <div className={style.about}>
          <h1>Professional Lawn Care Servicing Hampton Roads</h1>
          <p>We offer a wide variety of lawn care services ensuring full coverage for all of your lawn and yard maintenance needs in all seasons.</p>
          <p className={style.lastSentence} >Contact us via email, phone or instagram today to receive a free quote!</p>
        </div>
      </article> 

      <BottomNav />  

    </>
  );
}

export default Home;
