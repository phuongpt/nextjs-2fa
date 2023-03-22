import Register from './register'

class RegisterAdditionalDetails extends Register {
  getButton() {
    return cy.get('button[data-cy="additionaldetailscontinue"]')
  }
  getCategoryButton() {
    return cy.get('[data-cy="businesscatagorydropdown"]')
  }
  getCategoryDropdown() {
    return cy.get('[data-cy="businesscatagorylist"]')
  }
  getSubCategoryButton() {
    return cy.get('[data-cy="subcatagorydropdown"]')
  }
  getSubCategoryDropdown() {
    return cy.get('[data-cy="subcatagorylist"]')
  }
  getDetailsTypeRadio() {
    return cy.get('[name="details-type"]')
  }
  getDescriptionField() {
    return cy.get('[data-cy="description"]')
  }
}

export default RegisterAdditionalDetails
