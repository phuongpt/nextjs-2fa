import RegisterMobileConfirmPage from '../../pages/register/mobile-confirm-page'

describe('Testing on sign-up mobile confirm screen', () => {
  const page = new RegisterMobileConfirmPage()
  it('Should be sign-up mobile confirm screen', () => {
    page.getHeader().should('be.visible')
    cy.eqPath('/signup/mobile-confirm')
  })

  it('Should disable button before input', () => {
    page.getButton().should('be.disabled')
  })

  it('Should be invalid form when input invalid code', () => {
    cy.intercept('PUT', 'api/signup/trade-channels/validate-phone', {
      body: {
        valid: false,
      },
    }).as('validatePhone')

    page.getCodeField().first().focus().type('343244')
    page.getPhoneConfirmError().should('be.visible')
    page.getButton().should('be.disabled')
    cy.wait('@validatePhone')
  })

  it('Should be valid form when input valid code', () => {
    cy.intercept('PUT', 'api/signup/trade-channels/validate-phone', {
      body: {
        valid: true,
      },
    })

    page.getCodeField().first().focus().type('123456')
    page.getPhoneConfirmError().should('not.exist')
    page.getButton().should('not.be.disabled')
  })

  it('Should redirect to sign-up password after click continue', () => {
    page.getButton().click()
    cy.eqPath('/signup/password')
  })
})
