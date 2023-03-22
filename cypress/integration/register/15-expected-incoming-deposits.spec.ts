import RegisterExpectedIncomingDepositsPage from '../../pages/register/expected-incoming-deposits-page'

describe('Testing on sign-up use account screen', () => {
  const page = new RegisterExpectedIncomingDepositsPage()

  it('Should be sign-up use account screen', () => {
    page.getHeader().should('be.visible')
    cy.eqPath('/signup/expected-incoming-deposits')
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

    page.getCountryButton().click()
    page.getCountryList().should('be.visible').find('li').first().click()
    cy.get('body').click(0, 0)

    page.getCurrencyButton().click()
    page.getCurrencyList().should('be.visible').find('li').first().click()
    cy.get('body').click(0, 0)

    page.getExpectedIncomingButton().click()
    page
      .getExpectedIncomingList()
      .should('be.visible')
      .find('li')
      .first()
      .click()

    page.getButton().should('not.be.disabled')
  })

  it('Should redirect to sign-up intl payment activity after click continue', () => {
    cy.intercept('PATCH', '/api/organization/*/banking-application', {
      statusCode: 200,
    })
    cy.intercept('GET', '/api/organization/*/banking-application', {
      fixture: 'organization/banking-application.json',
    })
    cy.intercept(
      {
        method: 'GET',
        pathname: '/api/fx/currency-pair/active/from',
      },
      {
        fixture: 'fx/currency-pair-from.json',
      }
    )
    cy.intercept(
      {
        method: 'GET',
        pathname: '/api/fx/currency-pair/active/to',
      },
      {
        fixture: 'fx/currency-pair-to.json',
      }
    )
    page.getButton().click()
    cy.eqPath('/signup/intl-payment-activity')
  })
})
