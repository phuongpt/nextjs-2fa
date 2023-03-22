import Register from './register'

class RegisterOnfidoPage extends Register {
  getWelcomeStep() {
    return cy.get('[data-page-id="Welcome"]')
  }
  getWelcomeNextButton() {
    return cy.get('[data-onfido-qa="welcome-next-btn"]')
  }
  getCountrySelector() {
    return cy.get('[data-onfido-qa="countrySelector"]')
  }
  getCountryList() {
    return cy.get('[id="country-search__listbox"]')
  }
  getPassportOption() {
    return cy.get('[data-onfido-qa="passport"]')
  }
  getCrossDeviceIntroStep() {
    return cy.get('[data-page-id="CrossDeviceIntro"]')
  }
  getCrossDeviceIntroButton() {
    return cy.get('[data-onfido-qa="cross-device-continue-btn"]')
  }
}

export default RegisterOnfidoPage
