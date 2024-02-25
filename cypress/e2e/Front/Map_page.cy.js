describe('Map page', () => {
    it('Map page', () => {
        cy.viewport(1280, 1020)
        cy.visit('https://1000and1songs.com/#/')
        cy.get(':nth-child(4) > .menu-list__item-link').click()
        cy.location('protocol').should('eq', 'https:')
        cy.url().should('include', 'map')
        // Header
        cy.get('.header').should('be.visible')
        // Footer
        cy.get('.footer').should('be.visible')
        //Map container  
        cy.get('.map').should('be.visible')
        cy.contains('.map', 'Фільтр').should('be.visible');
        cy.get('.filter container').should('be.visible')
        // Expeditions__categories
        cy.get('.expeditions__gallery').should('be.visible')
        
        cy.get('.expeditions__gallery__item')
        .find('.event')
        .should('have.length', 12);        
        // Pagination
        cy.get('.pagination').should('be.visible')
    });
})