describe('MainVisual', () => {
    it('should be publicly accessible', () => {
      cy.visit('/about');
      cy.get('.team__container').scrollIntoView().should('be.visible')
      .then(() => {
        cy.get('.team__container').matchImageSnapshot();
      });
    });
});