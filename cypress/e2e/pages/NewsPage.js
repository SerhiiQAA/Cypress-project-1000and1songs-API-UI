class NewsP {
    validateNewsBtn() {
        cy.get(':nth-child(5) > .menu-list__item-link').click();
        cy.location('protocol').should('eq', 'https:');
        cy.url().should('include', 'news');
    }
    validateHeaderContainer() {
        cy.get('.header').should('be.visible');
    }
    validateFooterContainer() {
        cy.get('.footer').should('be.visible');
    }
    validateNewsContainer() {
        cy.get('.news').should('be.visible');
        cy.contains('.news', 'Новини').should('be.visible');
    }
    validateNewsFilter() {
        cy.get('.news__filter').should('be.visible');
    }
    validateBtnFilter() {
        const buttonNames = ['Усі', 'Зустрічі', 'Лекції', 'Публікації', 'Майстер-класи', 'Концерти', 'Конференції'];
        buttonNames.forEach(buttonName => {
            cy.get('.news__filter').should('contain.text', buttonName);
        })
    }
    validateNewsCard() {
        cy.get('.card__body');
            .find('.card__image-item, .card__title-name, .card__title-place');
            .should('be.visible');
    }
    validateCardsCount() {
        cy.get('.cards__wrap');
            .find('.card');
    }
}
export default NewsP;