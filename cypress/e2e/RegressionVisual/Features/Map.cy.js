describe('MainVisual', () => {
    it('should be publicly accessible', () => {
      cy.visit('/');
      cy.get('.map-container').matchImageSnapshot({
        // blackout: ['section.home__tape'],
      });
    });
});