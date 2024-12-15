import { user } from "../support/data";
import * as calls from "../fixtures/calls/userCalls";
import * as results from "../fixtures/results/userResults";

describe("user operations about user", () => {
  it("create user and validate", () => {
    cy.apiRequest("POST", `${user.user}`, calls.createUser).then((response) => {
      cy.wrap(response.status).should("eq", 200);
      cy.wrap(response.body).should("deep.equal", results.createUserResponse);
    });

    cy.apiRequest("GET", `${user.user}klaatu`, null).then((response) => {
      cy.wrap(response.status).should("eq", 200);
      cy.wrap(response.body).should("deep.equal", calls.createUser);
    });
  });
  it("update user and validate", () => {
    cy.apiRequest("PUT", `${user.user}klaatu`, calls.updateUser);
    cy.apiRequest("GET", `${user.user}klaatu`, null).then((response) => {
      cy.wrap(response.status).should("eq", 200);
      cy.wrap(response.body).should("deep.equal", calls.updateUser);
    });
  });

  it("login users and validate", () => {
    cy.apiRequest("GET", `${user.userLogin}klaatu valid password`, null).then((response) => {
      // cy.wrap(response.status).should("eq", 200);
      // cy.wrap(response.body).should("deep.equal", results.loginUserResponse);
    });
    cy.apiRequest("GET", `${user.userLogout}`, null).then((response) => {
      cy.wrap(response.status).should("eq", 200);
    });

  });
  it("delete user and validate", () => {
    cy.apiRequest("DELETE", `${user.user}klaatu`, null);
    cy.apiRequest("GET", `${user.user}klaatu`, null).then((response) => {
      cy.wrap(response.status).should("eq", 404);
      console.log(response.body);
      cy.wrap(response.body).should("deep.equal", results.deleteUserResponse);
    });
  });
});
