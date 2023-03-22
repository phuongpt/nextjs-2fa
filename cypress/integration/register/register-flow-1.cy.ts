const initTest = () => {
  cy.intercept('GET', '/api/push/event', {
    statusCode: 404,
  })
  cy.intercept('GET', '/api/notification/pending', {
    statusCode: 404,
  })
  cy.intercept(
    {
      method: 'GET',
      pathname: '/api/fx/currency/from',
    },
    {
      fixture: 'fx/currencies-from.json',
    }
  )
  cy.intercept(
    {
      method: 'GET',
      pathname: '/api/organization/static/banking-application-form-values',
    },
    {
      fixture: 'organization/banking-application-form-values.json',
    }
  )
  cy.interceptCountries()
}

before(() => {
  initTest()
})

beforeEach(() => {
  initTest()
})

import './01-account-type.spec'
import './02-account-country.spec'
import './03-email.spec'
import './04-email-confirm.spec'
import './05-mobile.spec'
import './06-mobile-confirm.spec'
import './07-password.spec'
import './08-personal-details.spec'
import './09-home-address.spec'
import './10-business-details.spec'
import './11-business-address.spec'
import './12-roles.spec'
import './13-additional-details.spec'
import './14-use-account.spec'
import './15-expected-incoming-deposits.spec'
import './16-intl-payment-activity.spec'
import './17-controlling-individuals.spec'
import './18-onfido.spec'
