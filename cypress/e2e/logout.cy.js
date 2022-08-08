/// <reference types="cypress" />

context('Logout', () => {
  before(() => {
    cy.visit('/login');
    const [username, password] = ['tesonet', 'partyanimal'];
    cy.get('input[name=username]').type(username);
    cy.get('input[name=password]').type(`${password}{enter}`);
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });

  it('successfully loads', () => {
    cy.visit('/');
  });

  it('properly remove cookie and log out', () => {
    cy.get(`[aria-label="logout"]`).click();
    cy.url().should('eq', Cypress.config().baseUrl + '/login');
    cy.getCookie('token').should('not.exist');
  });
  4;

  it('prevents from visiting home page', () => {
    cy.visit('/');
    cy.url().should('eq', Cypress.config().baseUrl + '/login');
  });
});
