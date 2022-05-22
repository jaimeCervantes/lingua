export function stubPremiumClassesPage() {
  cy.intercept('GET', '*/api/languages', { fixture: 'api/languages/get.json' });
  cy.intercept('GET', '*/v1/products', { fixture: 'stripe/v1/products/list.json' });
}