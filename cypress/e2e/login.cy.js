/// <reference types="cypress" />

context('Login', () => {
  beforeEach(() => {
    cy.visit('/login');
    cy.get('input[name=username]').clear();
    cy.get('input[name=password]').clear();
  });

  it('successfully loads', () => {
    cy.visit('/login');
  });

  it('displays two form inputs for username and password', () => {
    cy.get('.login-form input').should('have.length', 2);
  });

  it('fails to login with invalid credentials', () => {
    const [username, password] = ['bad', 'verybad'];
    cy.get('input[name=username]').type(username);
    cy.get('input[name=password]').type(`${password}{enter}`);
    cy.get('.error-message').contains(
      'Something went wrong, check credentials!'
    );
  });

  it('sets auth cookie when logging in with public credentials', function () {
    const [username, password] = ['tesonet', 'partyanimal'];
    cy.get('input[name=username]').type(username);
    cy.get('input[name=password]').type(`${password}{enter}`);
    cy.url().should('eq', Cypress.config().baseUrl + '/');
    cy.getCookie('token').should('exist');
  });

  it('redirects back to home page when logged in', () => {
    const [username, password] = ['tesonet', 'partyanimal'];
    cy.get('input[name=username]').type(username);
    cy.get('input[name=password]').type(`${password}{enter}`);
    cy.url().should('eq', Cypress.config().baseUrl + '/');
    cy.visit('/login');
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });
});
