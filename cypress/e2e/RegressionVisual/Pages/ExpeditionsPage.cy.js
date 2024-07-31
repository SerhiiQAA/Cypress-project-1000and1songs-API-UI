describe('MainVisual', () => {
    it('should be publicly accessible', () => {
      cy.visit('/expeditions');
      cy.matchImageSnapshot({
        // blackout: ['section.home__tape'],
      });
    });
});