import Register from './register'

class RegisterIntlPaymentActivityPage extends Register {
  getButton() {
    return cy.get('button[data-cy="intlpaymentactivitycontinue"]')
  }
  getEstimatedAmountButton() {
    return cy.get('[data-cy="estimatedMonthlyAmount"]')
  }
  getEstimatedAmountList() {
    return cy.get('[id="estimated-monthly-amount-listbox"]')
  }
  getEstimatedNumberButton() {
    return cy.get('[data-cy="estimatedMonthlyNumber"]')
  }
  getEstimatedNumberList() {
    return cy.get('[id="estimated-monthly-number-listbox"]')
  }
  getDestinationButton() {
    return cy.get('[data-cy="destination"]')
  }
  getDestinationList() {
    return cy.get('[id="country-select-listbox"]')
  }
  getCurrencyButton() {
    return cy.get('[data-cy="currencies"]')
  }
  getCurrencyList() {
    return cy.get('[id="currencies-select-listbox"]')
  }
  getExpectedAmountButton() {
    return cy.get('[data-cy="estimatedMonthlyLocalAmount"]')
  }
  getExpectedAmountList() {
    return cy.get('[id="incoming-montly-amount-listbox"]')
  }
}

export default RegisterIntlPaymentActivityPage
