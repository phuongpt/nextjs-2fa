import RegisterIntlPaymentActivityPage from '../../pages/register/intl-payment-activity-page'

describe('Testing on sign-up intl payment activity screen', () => {
  const page = new RegisterIntlPaymentActivityPage()

  it('Should be sign-up intl payment activity screen', () => {
    page.getHeader().should('be.visible')
    cy.eqPath('/signup/intl-payment-activity')
  })

  it('Should disable button before input', () => {
    page.getButton().should('be.disabled')
  })

  it('Should valid form when fill all fields', () => {
    page.getEstimatedAmountButton().click()
    page
      .getEstimatedAmountList()
      .should('be.visible')
      .find('li')
      .first()
      .click()

    page.getEstimatedNumberButton().click()
    page
      .getEstimatedNumberList()
      .should('be.visible')
      .find('li')
      .first()
      .click()

    page.getDestinationButton().click()
    page.getDestinationList().should('be.visible').find('li').first().click()
    cy.get('body').click(0, 0)

    page.getCurrencyButton().click()
    page.getCurrencyList().should('be.visible').find('li').first().click()
    cy.get('body').click(0, 0)

    page.getExpectedAmountButton().click()
    page.getExpectedAmountList().should('be.visible').find('li').first().click()

    page.getButton().should('not.be.disabled')
  })

  it('Should redirect to sign-up controlling individuals after click continue', () => {
    cy.intercept('PATCH', '/api/organization/*/banking-application', {
      statusCode: 200,
    })
    cy.intercept('GET', '/api/organization/*/banking-application', {
      fixture: 'organization/banking-application.json',
    })
    page.getButton().click()
    cy.eqPath('/signup/controlling-individuals')
  })
})
