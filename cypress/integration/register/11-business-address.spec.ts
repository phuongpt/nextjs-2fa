import RegisterBusinessAddressPage from '../../pages/register/business-address-page'

describe('Testing on sign-up business address screen', () => {
  const page = new RegisterBusinessAddressPage()

  it('Should be sign-up business address screen', () => {
    page.getHeader().should('be.visible')
    cy.eqPath('/signup/business-address')
  })

  it('Should disable button before input', () => {
    page.getButton().should('be.disabled')
  })

  it('Should valid when fill all fields', () => {
    page.getAddress1Field().type('Address 1')
    page.getAddress2Field().type('Address 2')
    page.getCityField().type('City 1')
    page.getStateField().type('State 1')
    page.getPostCodeField().type('PostCode123')
    page.getSameAddressRadio().check('Yes')
    page.getButton().should('not.be.disabled')
  })

  it('Should redirect to sign-up role after click continue', () => {
    cy.intercept('PATCH', '/api/organization/*/banking-application', {
      statusCode: 200,
    })
    cy.intercept('GET', '/api/organization/*/banking-application', {
      fixture: 'organization/banking-application.json',
    })
    page.getButton().click()
    cy.eqPath('/signup/roles')
  })
})
