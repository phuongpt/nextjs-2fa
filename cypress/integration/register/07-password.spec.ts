import RegisterPasswordPage from '../../pages/register/password-page'

describe('Testing on sign-up password screen', () => {
  const page = new RegisterPasswordPage()

  it('Should be sign-up password screen', () => {
    page.getHeader().should('be.visible')
    cy.eqPath('/signup/password')
  })

  it('Should disable button before input', () => {
    page.getButton().should('be.disabled')
  })

  page.formInvalidProvider().forEach(({ txt, password }) => {
    it(`Should invalid form because '${txt}'`, () => {
      page.getPasswordField().clear().type(password)
      page.getButton().should('be.disabled')
    })
  })

  it('Should input valid form', () => {
    cy.fixture('general.json').then(({ password }) => {
      page.getPasswordField().clear().type(password)
      page.getButton().should('not.be.disabled')
    })
  })

  it('Should redirect to sign-up personal detail after click continue', () => {
    cy.intercept('PUT', '/api/signup/trade-channels/password', {
      statusCode: 200,
    })
    page.getButton().click()
    cy.eqPath('/signup/personal-details')
  })
})
