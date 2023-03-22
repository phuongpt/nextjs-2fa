import RegisterAccountTypePage from '../../pages/register/account-type-page'

describe('Testing on account type screen', () => {
  const page = new RegisterAccountTypePage()

  before(() => {
    cy.clearAllStorage()
    page.navigate()
  })

  it('Should have header', () => {
    page.getHeader().should('be.visible')
  })

  it('Should disable button', () => {
    page.getButton().should('be.disabled')
  })

  it('Should able to choose create company', () => {
    page.getCreateCompanyOption().should('be.visible').should('not.be.disabled')
  })

  it('Should able to continue when choose create company', () => {
    page.getCreateCompanyOption().click()

    page.getButton().should('not.be.disabled')
  })

  it('Should redirect to select country after click continue', () => {
    page.getButton().click()
    cy.eqPath('/signup/account-country')
  })
})
