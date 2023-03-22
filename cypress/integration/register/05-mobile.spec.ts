import RegisterMobilePage from '../../pages/register/mobile-page'

describe('Testing on sign-up mobile screen', () => {
  const page = new RegisterMobilePage()

  it('Should be sign-up mobile screen', () => {
    page.getHeader().should('be.visible')
    cy.eqPath('/signup/mobile')
  })

  it('Should disable button before input', () => {
    page.getButton().should('be.disabled')
  })

  it('Should be able to select first item in the list country', () => {
    page.getPhoneCodeButton().click()
    page.getPhoneCodeList().should('be.visible').find('li').first().click()
  })

  it('Should be able to select last item in the list country', () => {
    page.getPhoneCodeButton().click()
    page.getPhoneCodeList().should('be.visible').find('li').last().click()
  })

  it('Should input invalid valid phone number', () => {
    cy.intercept('PUT', '/api/signup/trade-channels/phone', {
      statusCode: 400,
    })

    const phoneNumber = '123'
    page.getMobileField().type(phoneNumber)
    page.getMobileField().should('have.value', phoneNumber)
    page.getButton().should('not.be.disabled').click()
    page.getMobileError().should('not.be.empty')
  })

  it('Should redirect to sign-up mobile confirm after click continue', () => {
    cy.intercept('PUT', '/api/signup/trade-channels/phone', {
      statusCode: 200,
    })

    const phoneNumber = '123456789'
    page.getMobileField().clear().type(phoneNumber)
    page.getMobileField().should('have.value', phoneNumber)
    page.getButton().should('not.be.disabled').click()
    cy.eqPath('/signup/mobile-confirm')
  })
})
