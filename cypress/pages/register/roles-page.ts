import Register from './register'

class RegisterRolesPage extends Register {
  getButton() {
    return cy.get('button[data-cy="rolescontinue"]')
  }
  getOwnerRadio() {
    return cy.get('[data-cy="OWNER"]')
  }
  getOwnerPercentField() {
    return cy.get('[data-cy="ownerpercent"]')
  }
  getOtherRadio() {
    return cy.get('[data-cy="OTHER"]')
  }
  getOtherRoleField() {
    return cy.get('[data-cy="otherrole"]')
  }
  getBankingAccessRadio() {
    return cy.get('[name="banking-access-radio"]')
  }
}

export default RegisterRolesPage
