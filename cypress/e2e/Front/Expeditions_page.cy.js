describe('Expeditions page', () => {
    it('Expeditions page', () => {
        cy.viewport(1280, 1020)
        cy.visit('/')
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
        // Expeditions filter
        const buttonNames = ['Усі', 'Розвідка', 'Статичний', 'Міждисциплінарна', 'Тематична', 'Відеозапис обряду', 'Цифровий запис'];
        buttonNames.forEach(buttonName => {
            // cy.get('.news__filter').should('contain.text', buttonName);
        });
        cy.get('.expeditions__gallery')
        .find('.event')
        // .should('have.length', 10);        
        // Pagination
        // cy.get('.pagination').should('be.visible')
    });
})