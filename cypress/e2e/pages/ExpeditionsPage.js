class ExpeditionsP {
    validateExpeditionsBtn(){
        cy.get(':nth-child(3) > .menu-list__item-link').click();
        cy.location('protocol').should('eq', 'https:');
        cy.url().should('include', 'expeditions');
    }
    validateHeaderContainer() {
        cy.get('.header').should('be.visible');
    }
    validateFooterContainer() {
        cy.get('.footer').should('be.visible');
    }
    validateScienceContainer() {
        cy.get('.expeditions').should('be.visible');
        cy.contains('.expeditions', 'Експедиції').should('be.visible');
    }
    validateExpeditionsCategories() {
        cy.get('.expeditions__gallery').should('be.visible');    
    }
    validateExpeditionsFilter() {
        const buttonNames = ['Усі', 'Розвідка', 'Стаціонарна', 'Міждисциплінарна', 'Тематична', 'Відеозапис обряду', 'Цифровий запис'];
        buttonNames.forEach(buttonName => {
            cy.get('.news__filter').should('contain.text', buttonName);
        });
        cy.get('.expeditions__gallery');
        .find('.event');
    }
}
export default ExpeditionsP;