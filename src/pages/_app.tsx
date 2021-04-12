import { AppProps } from 'next/app'
import '../styles/globals.css'
import { AuthProvider } from '@/utils/auth'
import Head from 'next/head'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.svg" type="svg" />
      </Head>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  )
}

export default App
