import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Topbar from '../components/Topbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Hustlin&apos; Lawn Care</title>
      </Head>
      <Navbar />
      {/* <Topbar /> */}
      <Component {...pageProps} />
    </>

  )
}

export default MyApp
