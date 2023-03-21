import React, { useEffect } from 'react'

import type { AppProps } from 'next/app'

import { Provider, useDispatch } from 'react-redux'
import { store } from '../redux/store'

import CssBaseline from '@mui/material/CssBaseline'
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
} from '@mui/material/styles'
import { ThemeProvider } from 'styled-components'
import { StylesProvider } from '@mui/styles'
import { GlobalStyles } from '../styles/global-styles'
import { Theme } from '../libs/shared/styles/src'

import { AppDataProvider } from '../contexts/app-data-context'
import { SWRConfig } from 'swr'
import Head from 'next/head'
import { AuthenticationTokenClaimsProvider, SessionManager, useTokenClaims } from '../libs/auth/src'
import { AuthContextProvider, TokenClaims } from '../services/auth-service'
import { unsetCurrentAuth, unsetCurrentUser } from '../redux/user/actions'
import { LOG_OUT } from '../redux/auth/types'
import { USER_SET_ACCOUNT_ID } from '../redux/user/types'
import { logOut, refresh } from '../api/auth/methods'
import { appWithTranslation } from 'next-i18next'


export const muiTheme = createTheme({
  palette: {
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: Theme.typography.inter,
  },
  components: {
    MuiButton: {
      defaultProps: { disableRipple: true },
    },
    MuiMenuItem: {
      defaultProps: { disableRipple: true },
    },
  },
})


function LogOutActionDispatcher() {
  const { accessToken } = useTokenClaims<TokenClaims>()
  const dispatch = useDispatch()

  useEffect(() => {
    if (!accessToken.exp) {
      dispatch({ type: LOG_OUT })
      dispatch(unsetCurrentUser())
      dispatch(unsetCurrentAuth())
    }
  }, [accessToken])

  return null
}


function App({ Component, pageProps }: AppProps) {
  return <StyledEngineProvider injectFirst>
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      <GlobalStyles />
      <ThemeProvider theme={Theme}>
        <StylesProvider injectFirst>
          <Provider store={store}>
            <AppDataProvider>
              <SWRConfig
                value={{
                  fetcher: (url) => fetch(url).then((res) => res.json()),
                }}
              >
                <AuthenticationTokenClaimsProvider>
                  <SessionManager
                    onRefreshRequested={refresh}
                    onSessionExpiry={logOut}
                  />
                  <LogOutActionDispatcher />
                  <AuthContextProvider>
                    <Head>
                      <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/apple-touch-icon.png"
                      />
                      <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/favicon-32x32.png"
                      />
                      <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/favicon-16x16.png"
                      />
                      <link rel="manifest" href="/site.webmanifest" />
                      <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                      />
                    </Head>
                    <Component {...pageProps} />
                  </AuthContextProvider>
                </AuthenticationTokenClaimsProvider>
              </SWRConfig>
            </AppDataProvider>
          </Provider>
        </StylesProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  </StyledEngineProvider>
}
export default appWithTranslation(App)
