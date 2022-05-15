describe('Given a user booking a selected class in LinguaLlama.org/premium-classes/booking', () => {
  describe('When the user wants to select an schedule', () => {
    beforeEach(() => {
      cy.visit('/premium-classes');
      cy.get('[data-testid="LlamaPaidClass__bookBtn"]').first().click();
      cy.location('pathname').should('include', 'booking');
    });
  
    it('Then a calendar with at least one schedule with available seats should be shown', () => {
      cy.get('.llama-fc-available').eq(0).should('be.visible');
    });
  });
  
  describe('When the user wants to see the available schedules on the next week', () => {
    beforeEach(() => {
      cy.visit('/premium-classes');
      cy.get('[data-testid="LlamaPaidClass__bookBtn"]').first().click();
      cy.location('pathname').should('include', 'booking');
    });
  
    it('Then a calendar with next button should be shown', () => {
      cy.get('.fc-next-button').should('be.visible');
    });
  
    it('Then the next week should have at least one class with available seats', () => {
      cy.intercept('POST', `${Cypress.env('hostApi')}/api/schedules/find-or-create`)
        .as('fetchSchedules');
  
      cy.get('.fc-next-button').click();
        
      cy.wait('@fetchSchedules');
      cy.get('.llama-fc-available').its('length').should('to.be.above', 0);
    });
  });
});