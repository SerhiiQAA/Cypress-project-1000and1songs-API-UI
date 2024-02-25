describe('About page', () => {
    it('About page', () => {
        cy.viewport(1280, 1020)
        cy.visit('https://1000and1songs.com/#/')
        cy.get(':nth-child(1) > .menu-list__item-link').click()
        cy.location('protocol').should('eq', 'https:')
        cy.url().should('include', 'science')
        // Header
        cy.get('.header').should('be.visible')
        // Footer
        cy.get('.footer').should('be.visible')
        //Science container  
        cy.get('.science').should('be.visible')
        cy.contains('.science', 'Освітній розділ').should('be.visible');
        //Carousel buttons
        cy.get('.card').should('be.visible')
        cy.get('.card').to.have.length(6)
        // Recomendation
        cy.get('.mat-expansion-panel mat-elevation-z0 recomendations ng-tns-c1859850774-2 ng-star-inserted').should('be.visible')
        .contains('Рекомендації')
        cy.get('.mat-expansion-panel mat-elevation-z0 ng-tns-c1859850774-4 ng-star-inserted').should('be.visible')
        .contains('Рекомендовані джерела')
    });
})