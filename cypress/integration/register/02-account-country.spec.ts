import RegisterAccountCountryPage from '../../pages/register/account-country-page'

describe('Testing on account country screen', () => {
  const page = new RegisterAccountCountryPage()

  it('Should be account country screen', () => {
    page.getHeader().should('be.visible')
    cy.eqPath('/signup/account-country')
  })

  it('Should be able to continue', () => {
    page.getButton().should('be.visible').should('not.be.disabled')
  })

  it('Should be able to select first item in the list', () => {
    page.getCountryDropdown().should('be.visible').click()
    page.getCountryListBox().should('be.visible')
    page.getCountryListBox().find('li').first().click()
  })

  it('Should be able to select last item in the list', () => {
    page.getCountryDropdown().should('be.visible').click()
    page.getCountryListBox().should('be.visible')
    page.getCountryListBox().find('li').last().click()
  })

  it('Should redirect to sign-up with email after click continue', () => {
    page.getButton().click()
    cy.eqPath('/signup/email')
  })
})
