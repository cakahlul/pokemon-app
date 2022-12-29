describe('Fetch Pokemon', () => {
  it('should have searchbox when open page', () => {
    cy.visit('/');

    cy.get('[data-cy="searchBox"]').should('exist');
  });
});

export {}; // Prevent TypeScript from reading file as legacy script
