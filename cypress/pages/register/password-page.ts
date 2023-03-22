import Register from './register'

class RegisterPasswordPage extends Register {
  formInvalidProvider() {
    return [
      {
        txt: 'Min 6 characters',
        password: 'Abc12',
      },
      {
        txt: 'Min 1 lower case letter',
        password: 'ABC123',
      },
      {
        txt: 'Min 1 capital letter',
        password: 'abc123',
      },
      {
        txt: 'Min 1 number',
        password: 'Abcdef',
      },
    ]
  }

  getButton() {
    return cy.get('button[data-cy="addpassword"]')
  }

  getPasswordField() {
    return cy.get('[data-cy="password"]')
  }
}

export default RegisterPasswordPage
