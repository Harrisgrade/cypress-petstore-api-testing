describe('template spec', () => {
  it('passes', () => {
    cy.request({
      method: 'GET',
      url: 'https://petstore.swagger.io/v2/user/testUser',
  }).then((response) => {
      expect(response.status).to.eq(200)
    }
)
})
})
