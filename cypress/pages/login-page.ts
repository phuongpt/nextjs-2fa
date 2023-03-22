class LoginPage {
  navigate(email: string = '') {
    cy.visit('/login', {
      qs: {
        email,
      },
    })
  }
  getLoginPage() {
    return cy.get('[data-cy="loginpage"]')
  }
  getEmailField() {
    return cy.get('[data-cy="email"]')
  }
  getPasswordField() {
    return cy.get('[data-cy="password"]')
  }
  getErrorField() {
    return cy.get('[data-cy="error-password"]')
  }
  getLoginButton() {
    return cy.get('[data-cy="loginbutton"]')
  }
  getTwoFactor() {
    return cy.get('[data-cy="twofactor"]')
  }
  getCodeField() {
    return this.getTwoFactor().find('div[role="button"]')
  }
  getTwoFactorSubHeading() {
    return this.getTwoFactor().find('[data-cy="securitysubheading"]')
  }
  getTwoFactorGetCodeButton() {
    return this.getTwoFactor().find('[data-cy="getcode"]')
  }
}

export default LoginPage
