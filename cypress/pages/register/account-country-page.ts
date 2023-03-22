import Register from './register'

class RegisterAccountCountryPage extends Register {
  getButton() {
    return cy.get('[data-cy="userdetailscontinue"]')
  }

  getCountryDropdown() {
    return cy.get('[data-cy="countrydropdown"]')
  }

  getCountryListBox() {
    return this.getCountryDropdown().find('ul[role="listbox"]')
  }
}

export default RegisterAccountCountryPage
