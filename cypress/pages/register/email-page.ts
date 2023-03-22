import Register from './register'

class RegisterEmailPage extends Register {
  getButton() {
    return cy.get('button[data-cy="signupemail"]')
  }

  getEmailField() {
    return cy.get('[data-cy="email"]')
  }

  getEmailError() {
    return cy.get('[data-cy="error-email"]')
  }
}

export default RegisterEmailPage
