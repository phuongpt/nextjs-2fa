import RegisterRolesPage from '../../pages/register/roles-page'

describe('Testing on sign-up roles screen', () => {
  const page = new RegisterRolesPage()

  it('Should be sign-up roles screen', () => {
    page.getHeader().should('be.visible')
    cy.eqPath('/signup/roles')
  })

  it('Should disable button before input', () => {
    page.getButton().should('be.disabled')
  })

  it('Should show owner percent on check owner radio', () => {
    page.getOwnerRadio().click()
    page.getOwnerPercentField().should('be.visible')
    page.getButton().should('be.disabled')
  })

  it('Should show other role on check other radio', () => {
    page.getOtherRadio().click()
    page.getOtherRoleField().should('be.visible')
    page.getButton().should('be.disabled')
  })

  it('Should valid form', () => {
    page.getBankingAccessRadio().check('YES')
    page.getOwnerPercentField().type('25')
    page.getOtherRoleField().type('ROLE TEST')
    page.getButton().should('not.be.disabled')
  })

  it('Should redirect to sign-up additional details after click continue', () => {
    cy.intercept(
      'PATCH',
      '/api/organization/*/banking-application/controlling-individual/*',
      {
        statusCode: 200,
      }
    )
    cy.intercept('GET', '/api/organization/*/banking-application', {
      fixture: 'organization/banking-application.json',
    })
    cy.intercept(
      { method: 'GET', pathname: '/api/organization/static/category' },
      { fixture: 'organization/categories.json' }
    )
    page.getButton().click()
    cy.eqPath('/signup/additional-details')
  })
})
