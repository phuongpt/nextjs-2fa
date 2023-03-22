import Register from './register'

class RegisterMobileConfirmPage extends Register {
  getButton() {
    return cy.get('button[data-cy="confirm"]')
  }

  getCodeField() {
    return cy.get('form[id="mobile-confirm-form"] div[role="button"]')
  }

  getPhoneConfirmError() {
    return cy.get('[data-cy="error-phone-confirm"]')
  }
}

export default RegisterMobileConfirmPage
