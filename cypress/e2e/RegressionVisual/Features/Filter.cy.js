describe('MainVisual', () => {
  it('should be publicly accessible', () => {
    cy.visit('/map');
    cy.get('.filter__header').click()
    cy.get('.filter__body').scrollIntoView().should('be.visible')
      .then(() => {
        cy.get('.filter__body').matchImageSnapshot(
          {
            failureThreshold: 0.05,
            failureThresholdType: 'percent'
          });;
      });
    });
  });