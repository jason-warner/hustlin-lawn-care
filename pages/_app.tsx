import * as React from 'react';
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>Hustlin&apos; Lawn Care</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp
