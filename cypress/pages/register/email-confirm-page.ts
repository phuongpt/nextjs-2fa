import Register from './register'

class RegisterEmailConfirmPage extends Register {
  getButton() {
    return cy.get('button[data-cy="confirm"]')
  }

  getCodeField() {
    return cy.get('form[id="email-confirm-form"] div[role="button"]')
  }

  getEmailConfirmError() {
    return cy.get('[data-cy="error-email-confirm"]')
  }
}

export default RegisterEmailConfirmPage
