import RegisterEmailPage from '../../pages/register/email-page'

describe('Testing on sign-up email screen', () => {
  const page = new RegisterEmailPage()
  it('Should be sign-up email screen', () => {
    page.getHeader().should('be.visible')
    cy.eqPath('/signup/email')
  })

  it('Should disable button before input', () => {
    page.getButton().should('be.disabled')
  })

  it('Should able to input email field', () => {
    page.getEmailField().should('be.visible').should('not.be.disabled')
  })

  it('Should be invalid form when input invalid email', () => {
    page.getEmailField().type('invalidemail').blur()
    page.getButton().should('be.disabled')
  })

  it('Should be invalid form when API fail', () => {
    cy.intercept('POST', '/api/signup/trade-channels/initiate', {
      statusCode: 422,
    })
    page.getEmailField().type('invalid_api@test.com').blur()
    page.getButton().click()
    page.getEmailError().should('not.be.empty')
  })

  it('Should be valid form when input valid email', () => {
    page.getEmailField().clear().type('test@test.com')
    page.getEmailField().should('have.value', 'test@test.com')
    page.getEmailError().should('be.empty')
    page.getButton().should('not.be.disabled')
  })

  it('Should redirect to sign-up email-confirm after click continue', () => {
    cy.fixture('general.json').then(({ signupId }) => {
      cy.intercept('POST', '/api/signup/trade-channels/initiate', {
        body: {
          signupId,
        },
      })
      cy.intercept('PUT', '/api/signup/trade-channels/email', {
        statusCode: 200,
      })
      cy.intercept('GET', `/api/signup/trade-channels/${signupId}`, {
        fixture: 'auth/sign-up.json',
      })

      page.getButton().click()
      cy.eqPath('/signup/email-confirm')
    })
  })
})
