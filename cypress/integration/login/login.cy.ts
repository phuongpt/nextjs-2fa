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

})
