describe('MainVisual', () => {
    it('should be publicly accessible', () => {
      cy.visit('/');
      cy.get('.footer').should('be.visible')
      .then(() => {
        cy.get('.footer').matchImageSnapshot();
      });
    });
});