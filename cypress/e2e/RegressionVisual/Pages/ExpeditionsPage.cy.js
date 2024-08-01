describe('MainVisual', () => {
    it('should be publicly accessible', () => {
      cy.visit('/expeditions');
      cy.wait(500)
      cy.matchImageSnapshot({
        failureThreshold: 0.05,
        failureThresholdType: 'percent'
      });
    });
});