describe('Expeditions page', () => {
    it('Expeditions page', () => {
        cy.viewport(1280, 1020)
        cy.visit('https://1000and1songs.com/#/')
        cy.get(':nth-child(3) > .menu-list__item-link').click()
        cy.location('protocol').should('eq', 'https:')
        cy.url().should('include', 'expeditions')
        // Header
        cy.get('.header').should('be.visible')
        // Footer
        cy.get('.footer').should('be.visible')
        //Science container  
        cy.get('.expeditions').should('be.visible')
        cy.contains('.expeditions', 'Експедиції').should('be.visible');
        // Expeditions__categories
        cy.get('.expeditions__gallery').should('be.visible')
        
        cy.get('.expeditions__gallery__item')
        .find('.event')
        .should('have.length', 12);        
        // Pagination
        cy.get('.pagination').should('be.visible')
    });
})