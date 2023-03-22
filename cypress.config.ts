import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    testIsolation: false,
    specPattern: './cypress/**/*.cy.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:4200',
    setupNodeEvents(on, config) {
      on('after:run', (results) => {
        /* ... */
      })
    },
  },
})
