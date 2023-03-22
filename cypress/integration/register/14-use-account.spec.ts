import RegisterUseAccountPage from '../../pages/register/use-account-page'

describe('Testing on sign-up use account screen', () => {
  const page = new RegisterUseAccountPage()

  it('Should be sign-up use account screen', () => {
    page.getHeader().should('be.visible')
    cy.eqPath('/signup/use-account')
  })

  it('Should disable button before input', () => {
    page.getButton().should('be.disabled')
  })

  it('Should valid form when fill all fields', () => {
    page.getSourceOfFundButton().click()
    page.getSourceOfFundList().should('be.visible').find('li').first().click()

    page.getAdditionalSourceOfFundButton().click()
    page
      .getAdditionalSourceOfFundList()
      .should('be.visible')
      .find('li')
      .first()
      .click()
    cy.get('body').click(0, 0)

    page.getMainUseOfAccountButton().click()
    page
      .getMainUseOfAccountList()
      .should('be.visible')
      .find('li')
      .first()
      .click()

    page.getAdditionalUseofAccountButton().click()
    page
      .getAdditionalUseofAccountList()
      .should('be.visible')
      .find('li')
      .first()
      .click()
    cy.get('body').click(0, 0)

    page.getSameAddressRadio().check('Yes')
    page.getButton().should('not.be.disabled')
  })

  it('Should redirect to sign-up expected incoming deposits after click continue', () => {
    cy.intercept('PATCH', '/api/organization/*/banking-application', {
      statusCode: 200,
    })
    cy.intercept('GET', '/api/organization/*/banking-application', {
      fixture: 'organization/banking-application.json',
    })
    page.getButton().click()
    cy.eqPath('/signup/expected-incoming-deposits')
  })
})
