describe('MainVisual', () => {
    it('should be publicly accessible', () => {
      cy.visit('/');
      cy.get('.nav').matchImageSnapshot({
      });
    });
});