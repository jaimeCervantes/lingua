describe('Given an user in LinguaLlama.org/premium-classes', () => {
  beforeEach(() => {
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

describe('When the user wants to book a class', () => {
  beforeEach(() => {
    cy.visit('/premium-classes');
    cy.get('[data-testid="LlamaPaiClass__book"]').first().click();
  });

  it('Then a calendar with at least one class with available seats should be shown', () => {
    cy.get('.llama-fc-available').eq(0).should('be.visible');
  });
});

describe('When the user wants to see the available schedules on the next week', () => {
  beforeEach(() => {
    cy.visit('/premium-classes');
    cy.get('[data-testid="LlamaPaiClass__book"]').first().click();
  });

  it('Then a calendar with next button should be shown', () => {
    cy.get('.fc-next-button').should('be.visible');
  });

  it('Then the next week should have at least one class with available seats', () => {
    cy.get('.fc-next-button').first().then(el => {
      cy.intercept('POST', `${Cypress.env('hostApi')}/api/schedules/find-or-create`).as('fetchSchedules');
      el.click();

      cy.wait('@fetchSchedules');

      cy.get('.llama-fc-available').should('to.be.above', 0);
    });
  });
});