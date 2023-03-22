import RegisterAdditionalDetails from '../../pages/register/additional-details-page'

describe('Testing on sign-up additional details screen', () => {
  const page = new RegisterAdditionalDetails()

  it('Should be sign-up additional details screen', () => {
    page.getHeader().should('be.visible')
    cy.eqPath('/signup/additional-details')
  })

  it('Should disable button before input', () => {
    page.getButton().should('be.disabled')
  })

  it('Should valid form when fill all fields', () => {
    page.getCategoryButton().click()
    cy.intercept(
      { method: 'GET', pathname: '/api/organization/static/sub-category/*' },
      { fixture: 'organization/categories.json' }
    )
    page.getCategoryDropdown().should('be.visible').find('li').last().click()
    page.getSubCategoryButton().click()
    page.getSubCategoryDropdown().should('be.visible').find('li').last().click()
    page.getDetailsTypeRadio().check('no')
    page.getDescriptionField().should('be.visible').type('Description 1')
    page.getButton().should('not.be.disabled')
  })

  it('Should redirect to sign-up use account after click continue', () => {
    cy.intercept('PATCH', '/api/organization/*/banking-application', {
      statusCode: 200,
    })
    cy.intercept('GET', '/api/organization/*/banking-application', {
      fixture: 'organization/banking-application.json',
    })
    page.getButton().click()
    cy.eqPath('/signup/use-account')
  })
})
