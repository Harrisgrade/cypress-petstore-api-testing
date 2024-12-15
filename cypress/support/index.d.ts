/// <reference types="cypress" />

declare namespace Cypress {
	interface Chainable<Subject = any> {
		apiRequest(method: any, url: any, body: any): Chainable<any>;
	}
}