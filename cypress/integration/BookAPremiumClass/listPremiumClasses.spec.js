describe('Given an user in LinguaLlama.org', () => {
  describe('When the user wants to book a premium class', () => {
    it('Then a list of teachers available should be shown', () => {
      cy.visit('/premium-classes');

      cy.get('[data-testid="premium-classes-content"]').should('be.visible');
    });
  })
});