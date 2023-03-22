import Register from './register'

class RegisterHomeAddressPage extends Register {
  getButton() {
    return cy.get('button[data-cy="homeaddresscontinue"]')
  }

  getCountryDropdown() {
    return cy.get('[data-cy="countrydropdown"]')
  }

  getCountryDropdownListBox() {
    return this.getCountryDropdown().find('ul[role="listbox"]')
  }

  getAddress1Field() {
    return cy.get('[data-cy="address1"]')
  }

  getAddress2Field() {
    return cy.get('[data-cy="address2"]')
  }

  getCityField() {
    return cy.get('[data-cy="city"]')
  }

  getPostCodeField() {
    return cy.get('[data-cy="postcode"]')
  }
}

export default RegisterHomeAddressPage
