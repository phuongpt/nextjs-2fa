class PasswordResetPage {
  navigate(token: string) {
    cy.visit('/password-reset', {
      qs: {
        token,
      },
    })
  }
  getPasswordResetPage() {
    return cy.get('[data-cy="passwordresetpage"]')
  }
  getPasswordField() {
    return cy.get('[data-cy="password"]')
  }
  getErrorPassword() {
    return cy.get('[data-cy="error-password"]')
  }
  getConfirmPasswordField() {
    return cy.get('[data-cy="confirmpassword"]')
  }
  getErrorConfirmPassword() {
    return cy.get('[data-cy="error-confirmpassword"]')
  }
  getSubmitButton() {
    return cy.get('[data-cy="submitbutton"]')
  }
  getSuccessStep() {
    return cy.get('[data-cy="resetsuccess"]')
  }
  getSomethingWrongStep() {
    return cy.get('[data-cy="somethingwrong"]')
  }
}

export default PasswordResetPage
