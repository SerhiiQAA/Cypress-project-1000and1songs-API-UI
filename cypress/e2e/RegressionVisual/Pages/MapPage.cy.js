describe('MainVisual', () => {
    it('should be publicly accessible', () => {
      cy.visit('/map');
      cy.matchImageSnapshot({
        // blackout: ['section.home__tape'],
      });
    });
});