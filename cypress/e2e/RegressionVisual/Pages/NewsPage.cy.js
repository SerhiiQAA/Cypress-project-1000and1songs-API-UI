describe('MainVisual', () => {
    it('should be publicly accessible', () => {
      cy.visit('/news');
      cy.matchImageSnapshot({
        // blackout: ['section.home__tape'],
      });
    });
});