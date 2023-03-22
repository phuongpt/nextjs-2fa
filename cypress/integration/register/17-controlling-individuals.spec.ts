import RegisterControllingIndividualsPage from '../../pages/register/controlling-individuals-page'

describe('Testing on sign-up controlling individuals screen', () => {
  const page = new RegisterControllingIndividualsPage()

  it('Should be sign-up controlling individuals screen', () => {
    page.getHeader().should('be.visible')
    cy.eqPath('/signup/controlling-individuals')
  })

  it('Should be able to continue', () => {
    page.getButton().should('not.be.disabled')
  })

  it('Show show user edit information popup on click edit', () => {
    page.getEditButton().first().click()
    page.getOwnerPopupContainer().should('be.visible')
  })

  it('Show save user and close popup on click continue inside popup container', () => {
    cy.intercept(
      'PATCH',
      '/api/organization/*/banking-application/controlling-individual/*',
      {
        statusCode: 200,
      }
    )
    cy.intercept('GET', '/api/organization/*/banking-application', {
      fixture: 'organization/banking-application.json',
    }).as('bankingApplication')
    page.getOwnerPopupContinueButton().click()
    page.getOwnerPopupContainer().should('not.exist')
  })

  it('Should redirect to sign-up onfido after click continue', () => {
    cy.intercept('GET', '/api/organization/*/banking-application', {
      fixture: 'organization/banking-application.json',
    })
    cy.intercept('POST', '/api/organization/onfido/web-sdk-token', {
      fixture: 'onfido/web-sdk-token.json',
    })
    page.getButton().click()
    cy.eqPath('/signup/onfido')
  })
})
