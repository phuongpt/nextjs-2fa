import RegisterHomeAddressPage from '../../pages/register/home-address-page'

describe('Testing on sign-up home address screen', () => {
  const page = new RegisterHomeAddressPage()

  it('Should be sign-up home address screen', () => {
    page.getHeader().should('be.visible')
    cy.eqPath('/signup/home-address')
  })

  it('Should disable button before input', () => {
    page.getButton().should('be.disabled')
  })

  it('Should valid form when fill all the fields', () => {
    page.getCountryDropdown().click()
    page
      .getCountryDropdownListBox()
      .should('be.visible')
      .find('li')
      .last()
      .click()

    page.getAddress1Field().type('Address 1')
    page.getAddress2Field().type('Address 2')
    page.getCityField().type('City 1')
    page.getPostCodeField().type('POSTCODE12345')

    page.getButton().should('not.be.disabled')
  })

  it('Should redirect to sign-up business detail after click continue', () => {
    cy.intercept('PUT', '/api/signup/trade-channels/person', {
      statusCode: 200,
    })
    cy.intercept('GET', `/api/organization/static/legal-structure/*`, {
      fixture: 'organization/legal-structure.json',
    })
    page.getButton().click()
    cy.eqPath('/signup/business-details')
  })
})
