describe('MainVisual', () => {
    it('should be publicly accessible', () => {
      cy.visit('/map');
      cy.get('app-stereo-player > :nth-child(1)').matchImageSnapshot({
        // blackout: ['.footer__rules > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)'],
      });
    });
});