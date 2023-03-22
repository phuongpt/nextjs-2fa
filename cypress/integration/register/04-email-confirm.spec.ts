import RegisterEmailConfirmPage from '../../pages/register/email-confirm-page'

describe('Testing on sign-up email confirm screen', () => {
  const page = new RegisterEmailConfirmPage()

  it('Should be sign-up email confirm screen', () => {
    page.getHeader().should('be.visible')
    cy.eqPath('/signup/email-confirm')
    cy.get('form[id="email-confirm-form"]').should('be.visible')
  })

  it('Should disable button before input', () => {
    page.getButton().should('be.disabled')
  })

  it('Should be invalid form when input invalid code', () => {
    cy.intercept('PUT', 'api/signup/trade-channels/validate-email', {
      body: {
        valid: false,
      },
    }).as('validateEmail')

    page.getCodeField().first().focus().type('423133')
    page.getEmailConfirmError().should('not.be.empty')
    page.getButton().should('be.disabled')
    cy.wait('@validateEmail')
  })

  it('Should be valid form when input valid code', () => {
    cy.intercept('PUT', 'api/signup/trade-channels/validate-email', {
      body: {
        valid: true,
      },
    })

    page.getCodeField().first().focus().type('123456')
    page.getEmailConfirmError().should('not.exist')
    page.getButton().should('not.be.disabled')
  })

  it('Should redirect to sign-up mobile after click continue', () => {
    page.getButton().click()
    cy.eqPath('/signup/mobile')
  })
})
