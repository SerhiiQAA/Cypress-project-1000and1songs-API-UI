describe('Login', () => {
    it('should be publicly accessible', () => {
      cy.visit('/');
      cy.matchImageSnapshot();
    });
});