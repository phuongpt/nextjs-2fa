import Register from './register'

class RegisterUseAccountPage extends Register {
  getButton() {
    return cy.get('button[data-cy="useaccountcontinue"]')
  }
  getSourceOfFundButton() {
    return cy.get('[data-cy="mainDepositSource"]')
  }
  getSourceOfFundList() {
    return cy.get('[id="main-deposit-source-listbox"]')
  }
  getAdditionalSourceOfFundButton() {
    return cy.get('[data-cy="additionalDepositSource"]')
  }
  getAdditionalSourceOfFundList() {
    return cy.get('[id="additional-deposit-source-listbox"]')
  }
  getMainUseOfAccountButton() {
    return cy.get('[data-cy="mainAccountPurpose"]')
  }
  getMainUseOfAccountList() {
    return cy.get('[id="mainaccount-purpose-listbox"]')
  }
  getAdditionalUseofAccountButton() {
    return cy.get('[data-cy="secondaryAccountPurpose"]')
  }
  getAdditionalUseofAccountList() {
    return cy.get('[id="secondary-account-purposes-listbox"]')
  }
  getSameAddressRadio() {
    return cy.get('[name="same-address-radio"]')
  }
}

export default RegisterUseAccountPage
