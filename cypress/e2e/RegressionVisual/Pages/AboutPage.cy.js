describe('MainVisual', () => {
    it('should be publicly accessible', () => {
      cy.visit('/about');
    //   cy.get('.active > img').should(be.visible);
      cy.matchImageSnapshot({
        blackout: ['.active > img'],
      });
    });
});