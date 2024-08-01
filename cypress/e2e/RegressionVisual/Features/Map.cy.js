describe('MainVisual', () => {
  it('should be publicly accessible', () => {
    cy.visit('/');
    cy.get('.map-container').scrollIntoView().wait(1000).should('be.visible')
      .then(() => {
        cy.get('.map-container').matchImageSnapshot({
          failureThreshold: 0.05,
          failureThresholdType: 'percent'
        });
      });
  });
});