import Register from './register'

class RegisterPersonalDetailsPage extends Register {
  getButton() {
    return cy.get('button[data-cy="submit-button"]')
  }

  getFirstNameField() {
    return cy.get('[data-cy="firstname"]')
  }

  getLastNameField() {
    return cy.get('[data-cy="lastname"]')
  }

  getNationalityDropdown() {
    return cy.get('[data-cy="nationalitydropdown"]')
  }

  getNationalityDropdownListBox() {
    return this.getNationalityDropdown().find('ul[role="listbox"]')
  }

  getDobDayField() {
    return cy.get('[data-cy="dobday"]')
  }

  getDobMonthButton() {
    return cy.get('[data-cy="dobmonth"]')
  }

  getDobMonthList() {
    return cy.get('[data-cy="dobmonthlist"]')
  }

  getDobYearField() {
    return cy.get('[data-cy="dobyear"]')
  }
}

export default RegisterPersonalDetailsPage
