import React, { Suspense, useEffect } from 'react'
import { I18nextProvider } from 'react-i18next'
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
} from '@mui/material/styles'
import { StylesProvider } from '@mui/styles'
import { ThemeProvider } from 'styled-components'
import { Theme } from '../libs/shared/styles/src/index'
import CssBaseline from '@mui/material/CssBaseline'
import { GlobalStyles } from '../styles/global-styles'
import './styles.css'
import i18n from './i18n'
import * as NextImage from 'next/image'

const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
})

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
    hideNoControlsWarning: true,
    sort: 'requiredFirst',
  },
}

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    toolbar: {
      icon: 'globe',
      items: [{ value: 'en', right: '🇺🇸', title: 'English' }],
      showName: true,
    },
  },
}

// When The language changes, set the document direction
// i18n.on('languageChanged', (locale) => {
//   const direction = i18n.dir(locale);
//   document.dir = direction;
// });

// Wrap your stories in the I18nextProvider component
const i18nextStoryDecorator = (Story, context) => {
  const { locale } = context.globals

  // When the locale global changes
  // Set the new locale in i18n
  useEffect(() => {
    i18n.changeLanguage('en')
  }, [locale])

  return (
    // here catches the suspense from components not yet ready (still loading translations)
    // alternative set useSuspense false on i18next.options.react when initializing i18next
    <Suspense fallback={<div>loading translations...</div>}>
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    </Suspense>
  )
}

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

export const decorators = [
  (Story) => (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        <GlobalStyles />
        <ThemeProvider theme={Theme}>
          <StylesProvider injectFirst>
            <Story />
          </StylesProvider>
        </ThemeProvider>
      </MuiThemeProvider>
    </StyledEngineProvider>
  ),
  i18nextStoryDecorator,
]
