import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Theme } from '../custom'
import { Provider } from 'react-redux'
import store from '../redux'

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles)
    }
  }, [])

  return <>
    <Head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width,initial-scale=1' />
      <title>Vnda Test</title>
    </Head>

    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  </>
}

export default App
