import Register from './register'

class RegisterAccountTypePage extends Register {
  getButton() {
    return cy.get('button[data-cy="terms"]')
  }

  getCreateCompanyOption() {
    return cy.get('[data-cy="createacompany"]')
  }
}

export default RegisterAccountTypePage
