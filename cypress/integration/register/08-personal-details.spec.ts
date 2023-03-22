import RegisterPersonalDetailsPage from '../../pages/register/personal-details-page'

describe('Testing on sign-up personal details screen', () => {
  const page = new RegisterPersonalDetailsPage()

  it('Should be sign-up personal details screen', () => {
    page.getHeader().should('be.visible')
    cy.eqPath('/signup/personal-details')
  })

  it('Should disable button before input', () => {
    page.getButton().should('be.disabled')
  })

  it('Should valid form when fill all the fields', () => {
    page.getFirstNameField().type('First name')
    page.getLastNameField().type('Last name')
    page.getNationalityDropdown().click()
    page
      .getNationalityDropdownListBox()
      .should('be.visible')
      .find('li')
      .last()
      .click()

    page.getDobDayField().type('12')
    page.getDobMonthButton().click()
    page.getDobMonthList().should('be.visible').find('li').first().click()
    page.getDobYearField().type('2000')

    page.getButton().should('not.be.disabled')
  })

  it('Should redirect to sign-up home address after click continue', () => {
    page.getButton().click()
    cy.eqPath('/signup/home-address')
  })
})
