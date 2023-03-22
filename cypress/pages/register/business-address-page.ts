import Register from './register'

class RegisterBusinessAddressPage extends Register {
  getButton() {
    return cy.get('button[data-cy="addresscontinue"]')
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
  getStateField() {
    return cy.get('[data-cy="state"]')
  }
  getPostCodeField() {
    return cy.get('[data-cy="postcode"]')
  }
  getSameAddressRadio() {
    return cy.get('[name="same-address-radio"]')
  }
}

export default RegisterBusinessAddressPage
