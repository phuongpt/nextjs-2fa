import ResetPasswordPage from '../../pages/reset-password-page'

describe('Testing for reset password page', () => {
  const page = new ResetPasswordPage()

  before(() => {
    cy.clearAllStorage()
  })

  it('Should be on reset password page', () => {
    page.navigate()
    page.getResetPasswordPage().should('be.visible')
    page.getResetButton().should('not.be.disabled')
    page.getErrorEmail().should('be.empty')
  })

  it('Should be show error on input invalid email', () => {
    page.getEmailField().clear().type('invalidemail')
    page.getResetButton().click()
    page.getErrorEmail().should('not.be.empty')
  })

  it('Should be show success screen on submit an invalid form', () => {
    cy.intercept('POST', '/api/auth/password-reset', {
      statusCode: 202,
    })
    page.getEmailField().clear().type('validemail@test.com')
    page.getResetButton().click()
    page.getCodeSentMessage().should('be.visible')
  })
})
