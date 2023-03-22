import Register from './register'

class RegisterControllingIndividualsPage extends Register {
  getButton() {
    return cy.get('button[data-cy="businesscontinue"]')
  }
  getEditButton() {
    return cy.get('[data-cy="editindividual"]')
  }
  getOwnerPopupContainer() {
    return cy.get('[data-cy="ownerpopupcontainer"]')
  }
  getOwnerPopupContinueButton() {
    return this.getOwnerPopupContainer().find('[data-cy="businesscontinue"]')
  }
}

export default RegisterControllingIndividualsPage
