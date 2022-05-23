import { stubPremiumClassesPage } from './requestsStubs.js';

describe('Given an user in LinguaLlama.org/premium-classes', () => {
  beforeEach(() => {
    stubPremiumClassesPage();
    cy.visit('/premium-classes');
  });

  describe('When the user wants to book a premium class', () => {
    it('Then a list of classes available should be shown', () => {
      cy.get('[data-testid="premium-classes-content"]').should('be.visible');
      cy.get('[data-testid="LlamaPaidClassList"]').should('be.visible');
      cy.get('[data-testid="LlamaPaidClass"]').should('be.visible');
    });
  });
});