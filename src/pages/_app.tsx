import { AppProps } from 'next/app'
import '../styles/globals.css'
import '@ibm/plex/css/ibm-plex.css'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default App
