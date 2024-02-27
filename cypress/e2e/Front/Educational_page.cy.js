describe('Educational section', () => {
    it('Educational section', () => {
        cy.viewport(1280, 1020)
        cy.visit('https://1000and1songs.com/#/')
        cy.get(':nth-child(2) > .menu-list__item-link').click()
        cy.location('protocol').should('eq', 'https:')
        cy.url().should('include', 'education')
        // Header
        cy.get('.header').should('be.visible')
        // Footer
        cy.get('.footer').should('be.visible')
        //Science container  
        cy.get('.science').should('be.visible')
        cy.contains('.science', 'Освітній розділ').should('be.visible');
        //Carousel buttons
        cy.get('.card').should('be.visible')
        cy.get('.science__gallery')
        .find('.card')
        .should('have.length', 9);        
        // Recomendation
        cy.get('#mat-expansion-panel-header-0').should('be.visible')
        .contains('Рекомендації')
        cy.get('#mat-expansion-panel-header-1').should('be.visible')
        .contains('Рекомендовані джерела')
    });
})