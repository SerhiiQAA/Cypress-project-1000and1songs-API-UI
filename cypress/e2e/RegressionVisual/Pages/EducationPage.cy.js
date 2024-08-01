describe('MainVisual', () => {
    it('should be publicly accessible', () => {
      cy.visit('/education');
      cy.wait(500)
      cy.matchImageSnapshot({
        failureThreshold: 0.05,
        failureThresholdType: 'percent'
      });
    });
});