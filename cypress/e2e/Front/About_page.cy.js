describe('About page', () => {
    it('About page', () => {
        cy.viewport(1280, 1020)
        cy.visit('https://1000and1songs.com/#/')
        cy.get(':nth-child(1) > .menu-list__item-link').click()
        //About container  
        cy.get('.about').should('be.visible')
        cy.contains('.about', 'Про нас').should('be.visible');
        //Carousel buttons
        cy.get('.carousel-nav').should('be.visible')
        // Video youtube
        cy.get('.ql-video').should('be.visible')
        // Team
        cy.get('.team').should('be.visible')
        cy.contains('.team', 'Команда').should('be.visible');
    });
})