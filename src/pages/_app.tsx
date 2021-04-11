import { AppProps } from 'next/app'
import '../styles/globals.css'
import { AuthProvider } from '@/utils/auth'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  )
}

export default App
