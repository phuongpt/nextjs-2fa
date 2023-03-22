/// <reference types="cypress" />

import Loggable = Cypress.Loggable
import Timeoutable = Cypress.Timeoutable

declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): void
      eqPath(pathname: string, options?: Partial<Loggable & Timeoutable>): void
      interceptCountries(): void
      clearAllStorage(): void
    }
  }
}

Cypress.Commands.add('login', (email: string, password: string) => {
  cy.visit('/login')
})

Cypress.Commands.add(
  'eqPath',
  (pathname: string, options?: Partial<Loggable & Timeoutable>) => {
    cy.location('pathname', options).should('eq', pathname)
  }
)

Cypress.Commands.add('interceptCountries', () => {
  cy.intercept(
    {
      method: 'GET',
      pathname: '/api/organization/static/country',
    },
    { fixture: 'organization/country.json' }
  )
})

Cypress.Commands.add('clearAllStorage', () => {
  cy.clearAllCookies()
  cy.clearAllSessionStorage()
  cy.clearAllLocalStorage()
})

export {}
