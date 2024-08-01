describe('MainVisual', () => {
  it('should be publicly accessible', () => {
    cy.visit('/map');
    cy.get('app-stereo-player > :nth-child(1)').scrollIntoView().should('be.visible')
      .then(() => {
        cy.get('app-stereo-player > :nth-child(1)').matchImageSnapshot();
      });
  });
});