import LoginPage from '../../pages/login-page'
import { generateAccessToken, generateRefreshToken } from '../../support/utils'

describe('Testing for login page', () => {
  const page = new LoginPage()

  before(() => {
    cy.clearAllStorage()
  })

  it('Should be on login page', () => {
    page.navigate()
    page.getLoginPage().should('be.visible')
  })

  it('Should prefill email with query email', () => {
    const email = 'email@email.com'
    page.navigate(email)
    page.getLoginPage().should('be.visible')
    page.getEmailField().should('have.value', email)
    page.getErrorField().should('be.empty')
  })

  it('Should show error on submit invalid information', () => {
    cy.intercept('POST', '/api/auth/login', {
      statusCode: 401,
    })

    page.getEmailField().clear().type('invalid@invalid.com')
    page.getPasswordField().clear().type('Invalid password')
    page.getLoginButton().click()
    page.getErrorField().should('not.be.empty')
  })

  it('Should show two factor on submit valid information', () => {
    cy.intercept('POST', '/api/auth/login', {
      statusCode: 200,
    })

    page.getEmailField().clear().type('valid@valid.com')
    page.getPasswordField().clear().type('Valid password')
    page.getLoginButton().click()
    page.getTwoFactor().should('be.visible')
    page.getTwoFactorGetCodeButton().should('not.be.disabled')
  })

  it('Should disable two factor button on click two factor button', () => {
    cy.intercept('POST', '/api/auth/send-code', {
      statusCode: 200,
    })

    page.getTwoFactorGetCodeButton().click().should('be.disabled')
  })

  it('Should be invalid form when input invalid code', () => {
    cy.intercept('POST', '/api/auth/login', {
      statusCode: 401,
    }).as('login')

    page.getCodeField().first().focus().type('423133')
    page.getTwoFactorGetCodeButton().should('not.be.disabled').click()
    cy.wait('@login').then(() => {
      page.getTwoFactorSubHeading().should('be.visible')
    })
  })

  it('Should be able to enter code again', () => {
    cy.intercept('POST', '/api/auth/send-code', {
      statusCode: 200,
    })

    page.getTwoFactorGetCodeButton().click().should('be.disabled')
  })

  it('Should be redirect to home page', () => {
    cy.fixture('auth/auto-login.json').then(async (data) => {
      cy.intercept('POST', '/api/auth/login', {
        body: {
          ...data,
          token: await generateAccessToken(),
          refreshToken: await generateRefreshToken(),
        },
      })

      cy.intercept('GET', '/api/push/event', {
        statusCode: 404,
      })
      cy.intercept('GET', '/api/notification/pending', {
        statusCode: 404,
      })
      cy.intercept(
        {
          method: 'GET',
          pathname: '/api/fx/currency',
        },
        {
          fixture: 'fx/currencies.json',
        }
      )
      cy.intercept(
        {
          method: 'GET',
          pathname: '/api/fx/currency/from',
        },
        {
          fixture: 'fx/currencies-from.json',
        }
      )

      cy.intercept(
        {
          method: 'GET',
          pathname: '/api/organization/*',
        },
        {
          fixture: 'organization/detail.json',
        }
      )
      cy.intercept('GET', '/api/organization/members/current', {
        fixture: 'auth/current.json',
      })
      cy.intercept('POST', '/api/auth/validate', {
        fixture: 'auth/validate.json',
      })
      cy.intercept('GET', '/api/organization/*/banking-application', {
        fixture: 'organization/banking-application.json',
      })
      cy.intercept('GET', '/api/organization/*/members', {
        fixture: 'organization/members.json',
      })
      cy.intercept('GET', '/api/organization/*/members/related', {
        body: [],
      })
      cy.intercept('GET', '/api/payment/accounts', {
        body: [],
      })

      page.getCodeField().first().focus().type('423133')
      cy.location('pathname').should('eq', '/login')
      page.getTwoFactorGetCodeButton().should('not.be.disabled').click()
      cy.location('pathname', { timeout: 10000 }).should('not.eq', '/login')
    })
  })
})
