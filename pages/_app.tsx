/* eslint-disable @typescript-eslint/explicit-function-return-type */
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'
import { pageview } from '../src/lib/gtag'

function MyApp ({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return <>
    <Head>
      <meta property="og:title" content="38億年前の蟹工船" />
      {/* <meta property="og:url" content="ページのURL" /> */}
      <meta property="og:image" content="https://kani38.vercel.app/ogp.png" />
      <meta property="og:description" content="「おい、地獄さ行ぐんだで！」" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@rtr_dnd" />
    </Head>
    <Component {...pageProps} />
  </>
}
export default MyApp
