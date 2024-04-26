describe('News page', () => {
    it('News page', () => {
        cy.viewport(1280, 1020)
        cy.visit('/')
        cy.get(':nth-child(5) > .menu-list__item-link').click()
        cy.location('protocol').should('eq', 'https:')
        cy.url().should('include', 'news')
        // Header
        cy.get('.header').should('be.visible')
        // Footer
        cy.get('.footer').should('be.visible')
        //News container  
        cy.get('.news').should('be.visible')
        cy.contains('.news', 'Новини').should('be.visible');
        // News_filter
        cy.get('.news__filter').should('be.visible')
        // Buttons filter
        const buttonNames = ['Усі', 'Зустрічі', 'Лекції', 'Публікації', 'Майстер-класи', 'Концерти', 'Конференції'];
        buttonNames.forEach(buttonName => {
            cy.get('.news__filter').should('contain.text', buttonName);
        });
        // News_card
        cy.get('.card__body')
            .find('.card__image-item, .card__title-name, .card__title-place')
            .should('be.visible');
        // Cards count
        cy.get('.cards__wrap')
            .find('.card')
            // .should('have.length', 2);
        // Pagination
        // cy.get('.pagination').should('be.visible')
    });
})