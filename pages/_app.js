import '../styles/globals.scss'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { GeneralProvider } from '../contexts/general'
import React from 'react'
import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'

function MyApp({ Component, pageProps }) {
  return (
        <ThemeProvider theme={theme}>
            <GeneralProvider>
                <Component {...pageProps} />
            </GeneralProvider>
            <GlobalStyle />
        </ThemeProvider>
  )
}

export default MyApp
