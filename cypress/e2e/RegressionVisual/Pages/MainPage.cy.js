describe('MainVisual', () => {
    it('should be publicly accessible', () => {
      cy.visit('/');
      cy.matchImageSnapshot({
        blackout: ['section.home__tape'],
      });
    });
});