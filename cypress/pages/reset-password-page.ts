class ResetPasswordPage {
  navigate() {
    cy.visit('/reset-password')
  }
  getResetPasswordPage() {
    return cy.get('[data-cy="resetpasswordpage"]')
  }
  getEmailField() {
    return cy.get('[data-cy="email"]')
  }
  getErrorEmail() {
    return cy.get('[data-cy="error-email"]')
  }
  getResetButton() {
    return cy.get('[data-cy="resetbutton"]')
  }
  getCodeSentMessage() {
    return cy.get('[data-cy="codesent"]')
  }
}

export default ResetPasswordPage
