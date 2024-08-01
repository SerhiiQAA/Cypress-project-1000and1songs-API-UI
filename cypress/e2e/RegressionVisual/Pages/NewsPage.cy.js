describe('MainVisual', () => {
    it('should be publicly accessible', () => {
      cy.visit('/news');
      cy.wait(700)
      cy.matchImageSnapshot({
        // blackout: ['section.home__tape'],
      });
    });
});