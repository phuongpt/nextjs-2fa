import RegisterBusinessDetailsPage from '../../pages/register/business-details-page'
import { generateAccessToken, generateRefreshToken } from '../../support/utils'

describe('Testing on sign-up business details screen', () => {
  const page = new RegisterBusinessDetailsPage()
  it('Should be sign-up business details screen', () => {
    page.getHeader().should('be.visible')
    cy.eqPath('/signup/business-details')
  })

  it('Should disable button before input', () => {
    page.getButton().should('be.disabled')
  })

  it('Should valid form when fill all the fields', () => {
    page.getLegalButton().click()
    page.getLegalDropdown().should('be.visible').find('li').last().click()

    page.getCompanyNameField().type('Company name 1')
    page.getTradingNameField().type('Trading name 1')
    page.getCompanyNumberField().type('Company number 1')
    page.getIncorporationDayField().type('12')
    page.getIncorporationMonthButton().click()
    page
      .getIncorporationMonthList()
      .should('be.visible')
      .find('li')
      .last()
      .click()
    page.getIncorporationYearField().type('2000')

    page.getButton().should('not.be.disabled')
  })

  it('Should be invalid company error', () => {
    cy.intercept('PUT', 'api/signup/trade-channels/validate-company-number', {
      statusCode: 200,
      body: {
        code: 409,
      },
    })

    page.getButton().click()
    page.getErrorCompanyNumber().should('not.be.empty')
  })

  it('Should redirect to sign-up business address after click continue', () => {
    cy.fixture('general.json').then(({ signupId }) => {
      cy.intercept('PUT', 'api/signup/trade-channels/validate-company-number', {
        statusCode: 200,
      })
      cy.intercept('PUT', `/api/signup/trade-channels/organization`, {
        statusCode: 204,
      })
      cy.intercept('GET', `/api/signup/trade-channels/${signupId}`, {
        fixture: 'auth/sign-up.json',
      })
      cy.fixture('auth/auto-login.json').then(async (data) => {
        cy.intercept('POST', '/api/auth/auto-login', {
          body: {
            ...data,
            token: await generateAccessToken(),
            refreshToken: await generateRefreshToken(),
          },
        })

        cy.intercept('GET', '/api/organization/members/current', {
          fixture: 'auth/current.json',
        })
        cy.intercept('POST', '/api/auth/validate', {
          fixture: 'auth/validate.json',
        })
        cy.intercept('GET', '/api/organization/*/banking-application', {
          fixture: 'organization/banking-application.json',
        })
        cy.intercept('GET', '/api/organization/*/members', {
          fixture: 'organization/members.json',
        })
        cy.intercept('GET', '/api/organization/*/members/related', {
          body: [],
        })

        page.getButton().click()
        cy.eqPath('/signup/business-address', { timeout: 10000 })
      })
    })
  })
})
