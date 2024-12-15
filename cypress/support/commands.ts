/// <reference types="cypress" />

Cypress.Commands.add(
	"apiRequest",
	(method: any, url: any, body: any) => {
		cy.request({
            method,
            url,
            failOnStatusCode: false,
            body, 
          })
	}
);