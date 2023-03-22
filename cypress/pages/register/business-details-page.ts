import Register from './register'

class RegisterBusinessDetailsPage extends Register {
  getButton() {
    return cy.get('button[data-cy="businesscontinue"]')
  }

  getLegalButton() {
    return cy.get('[data-cy="legalentity"]')
  }

  getLegalDropdown() {
    return cy.get('[data-cy="legalentitylist"]')
  }

  getCompanyNameField() {
    return cy.get('[data-cy="companyname"]')
  }

  getTradingNameField() {
    return cy.get('[data-cy="tradingname"]')
  }

  getCompanyNumberField() {
    return cy.get('[data-cy="companynumber"]')
  }

  getErrorCompanyNumber() {
    return cy.get('[data-cy="error-companynumber"]')
  }

  getIncorporationDayField() {
    return cy.get('[data-cy="incorporationday"]')
  }

  getIncorporationMonthButton() {
    return cy.get('[data-cy="incorporationmonth"]')
  }

  getIncorporationMonthList() {
    return cy.get('[data-cy="incorporationmonthlist"]')
  }

  getIncorporationYearField() {
    return cy.get('[data-cy="incorporationyear"]')
  }
}

export default RegisterBusinessDetailsPage
