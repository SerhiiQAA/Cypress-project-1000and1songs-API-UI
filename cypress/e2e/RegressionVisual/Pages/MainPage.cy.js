describe('MainVisual', () => {
  it('should be publicly accessible', () => {
    cy.visit('/');
    cy.get('.map-container').scrollIntoView().wait(700).should('be.visible')
      .then(() => {
        cy.matchImageSnapshot({
          failureThreshold: 0.05,
          failureThresholdType: 'percent'
        });
      })
  });
});

