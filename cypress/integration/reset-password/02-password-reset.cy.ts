import PasswordResetPage from '../../pages/password-reset-page'

describe('Testing for password reset page', () => {
  const page = new PasswordResetPage()

  before(() => {
    cy.clearAllStorage()
  })

  it('Should be on password reset page', () => {
    page.navigate('token1234')
    page.getPasswordResetPage().should('be.visible')
    page.getErrorPassword().should('be.empty')
    page.getErrorConfirmPassword().should('be.empty')
  })

  it('Should show password too weak', () => {
    page.getPasswordField().clear().type('weak')
    page.getSubmitButton().click()
    page.getErrorPassword().should('not.be.empty')
  })

  it('Should show password not match', () => {
    page.getPasswordField().clear().type('Monday123$$')
    cy.get('body').click(0, 0)
    page.getConfirmPasswordField().clear().type('second not match')
    page.getSubmitButton().click()
    page.getErrorConfirmPassword().should('not.be.empty')
  })

  it('Should show error when call API fail', () => {
    cy.intercept('PUT', '/api/auth/password-reset', {
      statusCode: 401,
    })
    page.getPasswordField().clear().type('Monday123$$')
    cy.get('body').click(0, 0)
    page.getConfirmPasswordField().clear().type('Monday123$$')
    page.getSubmitButton().click()
    page.getSomethingWrongStep().should('be.visible')
  })

  it('Should be on password reset page and input valid form', () => {
    page.navigate('token1234')
    page.getPasswordResetPage().should('be.visible')

    cy.intercept('PUT', '/api/auth/password-reset', {
      statusCode: 200,
    })
    page.getPasswordField().clear().type('Monday1234$$')
    cy.get('body').click(0, 0)
    page.getConfirmPasswordField().clear().type('Monday1234$$')
    page.getSubmitButton().click()
    page.getSuccessStep().should('be.visible')
  })
})
