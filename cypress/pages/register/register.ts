class Register {
  navigate() {
    cy.visit('/signup/account-type')
  }

  getHeader() {
    return cy.get('[data-cy="signup-header"]')
  }
}

export default Register
