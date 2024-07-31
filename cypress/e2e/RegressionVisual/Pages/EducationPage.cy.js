describe('MainVisual', () => {
    it('should be publicly accessible', () => {
      cy.visit('/education');
      cy.matchImageSnapshot({
        // blackout: ['section.home__tape'],
      });
    });
});