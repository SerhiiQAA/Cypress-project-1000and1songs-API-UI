describe('MainVisual', () => {
    it('should be publicly accessible', () => {
      cy.visit('/about');
      cy.get('.team__container').matchImageSnapshot({
        // blackout: ['.footer__rules > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)'],
      });
    });
});