describe('Header', () => {
    it('Header',() => {
        cy.viewport(1280, 1020)
        cy.visit('https://1000and1songs.com/#/')
// Home container  
    cy.get('.home').should('be.visible')         

    cy.contains('.home', '1000 і 1 пісня').should('be.visible');
    cy.contains('.home', 'У нас зібрані українські традиційні пісні різних жанрів з усіх регіонів. Популяризуймо Україну разом').should('be.visible');
    cy.contains('.home', 'Підтримати проєкт').should('be.visible');
    cy.contains('.home', 'Поділитись сайтом').should('be.visible');
// Running string
cy.get('.tapes').should('be.visible')
// Map
cy.get('.map').should('be.visible')
// Expeditions
cy.get('.expeditions').should('be.visible')
cy.contains('.expeditions', 'Подивитись відео').should('be.visible');
cy.contains('.expeditions', 'Дивитись усі відео').should('be.visible');
// News
cy.get('.news').should('be.visible')
cy.contains('.news', 'Анонс').should('be.visible');
cy.contains('.news', 'Переглянути усі').should('be.visible');
      });
})