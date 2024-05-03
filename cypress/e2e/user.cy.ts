import { user1 , user2} from '../models/user';
const baseUrl = Cypress.config('baseUrl')


describe('user', () => {
  it('get user', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}user`,
      body: user2
    }).its('body').then((body) => {
      console.log('body',body)
    })
    cy.request({
      method: 'GET',
      url: `${baseUrl}user/chosenOne`
  }).its('body').then((body) => {
    expect(body).to.deep.equal(user2)
  })
})
it('delete user', () => {
  cy.request({
    method: 'DELETE',
    url: `${baseUrl}user/chosenOne`,
}).then((response) => {
    expect(response.status).to.eq(200)
  })
  cy.request({
    method: 'GET',
    url: `${baseUrl}user/chosenOne`,
    failOnStatusCode: false
}).then((response) => {
    expect(response.status).to.eq(404)
  })
})
})
