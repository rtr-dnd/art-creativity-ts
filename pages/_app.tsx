/* eslint-disable @typescript-eslint/explicit-function-return-type */
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp ({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
