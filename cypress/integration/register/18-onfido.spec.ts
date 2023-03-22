import RegisterOnfidoPage from '../../pages/register/onfido-page'

describe('Testing on sign-up onfido screen', () => {
  const page = new RegisterOnfidoPage()

  before(() => {
    cy.on('window:before:load"', (win) => {
      console.log(win, '312321')
      cy.stub(win, 'WebSocket', (url) => {
        console.log(url, '321321321312312')
        return new WebSocket(url)
      })
    })

    cy.intercept(
      {
        method: 'POST',
        pathname: '/api/organization/onfido/web-sdk-token',
      },
      {
        fixture: 'onfido/web-sdk-token.json',
      }
    )
  })

  beforeEach(() => {
    cy.intercept(
      {
        method: 'POST',
        pathname: '/api/organization/onfido/web-sdk-token',
      },
      {
        fixture: 'onfido/web-sdk-token.json',
      }
    )
    cy.intercept(
      {
        method: 'POST',
        hostname: 'api.onfido.com',
        pathname: '/v3/analytics',
      },
      {
        fixture: 'onfido/analytics.json',
      }
    )
    cy.intercept(
      {
        method: 'POST',
        hostname: 'api.onfido.com',
        pathname: '/v3.3/sdk/configurations',
      },
      {
        fixture: 'onfido/configurations.json',
      }
    )
    cy.intercept(
      {
        method: 'PATCH',
        hostname: 'api.onfido.com',
        pathname: '/v3.3/applicants/*/location',
      },
      {
        statusCode: 200,
      }
    )
    cy.intercept(
      {
        method: 'GET',
        hostname: 'api.onfido.com',
        pathname: '/v3.3/applicants/*/consents',
      },
      []
    )
    cy.intercept(
      {
        method: 'GET',
        hostname: 'api.onfido.com',
        pathname: '/v3.3/report_types/proof_of_address/supported_countries',
      },
      {
        fixture: 'onfido/supported_countries.json',
      }
    )
  })

  it('Should be sign-up onfido screen', () => {
    page.getHeader().should('be.visible')
    cy.eqPath('/signup/onfido')
  })

  it('Should be on `welcome` step', () => {
    page.getWelcomeStep().should('be.visible')
    page.getWelcomeNextButton().should('be.visible')
  })

  it('Should be on `verify your identify` step', () => {
    page.getWelcomeNextButton().click().should('not.exist')
    page.getCountrySelector().should('be.visible')
    page.getCountryList().should('not.be.visible')
  })

  it('Show `passport` option on choose Germany on country selector', () => {
    page.getCountrySelector().click()
    page.getCountryList().should('be.visible').find('li').first().click()
    page.getPassportOption().should('be.visible')
  })

  it('Should be on `cross device intro` step on click `passport` option', () => {
    page.getPassportOption().click()
    page.getCrossDeviceIntroStep().should('be.visible')
    page.getCrossDeviceIntroButton().should('be.visible')
  })
})
