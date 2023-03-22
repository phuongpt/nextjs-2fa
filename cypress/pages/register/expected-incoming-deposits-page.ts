import Register from './register'

class RegisterExpectedIncomingDepositsPage extends Register {
  getButton() {
    return cy.get('button[data-cy="expectedincomingdepositscontinue"]')
  }
  getEstimatedAmountButton() {
    return cy.get('[data-cy="estimatedMonthlyAmount"]')
  }
  getEstimatedAmountList() {
    return cy.get('[id="incoming-montly-amount-listbox"]')
  }
  getEstimatedNumberButton() {
    return cy.get('[data-cy="estimatedMonthlyAmounts"]')
  }
  getEstimatedNumberList() {
    return cy.get('[id="incoming-monthly-num-listbox"]')
  }
  getCountryButton() {
    return cy.get('[data-cy="countries"]')
  }
  getCountryList() {
    return cy.get('[id="country-select-listbox"]')
  }
  getCurrencyButton() {
    return cy.get('[data-cy="currencies"]')
  }
  getCurrencyList() {
    return cy.get('[id="currencies-select-listbox"]')
  }
  getExpectedIncomingButton() {
    return cy.get('[data-cy="estimatedMonthlyLocalAmount"]')
  }
  getExpectedIncomingList() {
    return cy.get('[id="incoming-montly-amount-listbox"]')
  }
}

export default RegisterExpectedIncomingDepositsPage
