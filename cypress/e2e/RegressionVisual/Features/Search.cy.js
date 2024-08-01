describe('MainVisual', () => {
    it('should be publicly accessible', () => {
      cy.visit('/');
      cy.get('.search-img').click({ force: true })
      cy.get('#mat-input-0').should('be.visible')
      .then(() => {
        cy.get('#mat-input-0').matchImageSnapshot();
      });
    });
});