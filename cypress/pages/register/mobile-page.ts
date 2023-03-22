import Register from './register'

class RegisterMobilePage extends Register {
  getButton() {
    return cy.get('button[data-cy="addmobile"]')
  }

  getPhoneCodeButton() {
    return cy.get('form[id="mobile-form"] [data-cy="phone-code-btn"]')
  }

  getPhoneCodeList() {
    return cy.get('form[id="mobile-form"] [data-cy="phone-code-list"]')
  }

  getMobileField() {
    return cy.get('[data-cy="mobile"]')
  }

  getMobileError() {
    return cy.get('[data-cy="error-mobile"]')
  }

  getEmailConfirmError() {
    return cy.get('[data-cy="error-email-confirm"]')
  }
}

export default RegisterMobilePage
