// import MainPage from "../pages/MainPage.js";
// describe('Main page_Page object', () => {
//     it('Main page validation', () => {
//         cy.viewport(1280, 1020)
//         cy.visit('/');
//         const Test= new MainPage();
//         Test.validationHttps();
//         Test.validateHeader();
//         Test.validateFooter();
//         Test.validateHomeContainer();
//         Test.validateRunningString();
//         Test.validateExpeditionBlock();
//         Test.validateNewsBlock()
//     });
// })

    




describe('Main page', () => {
    it('Main page', () => {
        cy.viewport(1280, 1020)
        cy.visit('/')
        cy.location('protocol').should('eq', 'https:')
        // Header
        cy.get('.header').should('be.visible')
        // Footer
        cy.get('.footer').should('be.visible')
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
        cy.contains('.expeditions', 'Переглянути').should('be.visible');
        cy.contains('.expeditions', 'Переглянути усі').should('be.visible');
        // News
        cy.get('.news').should('be.visible')
        cy.contains('.news', 'Новини').should('be.visible');
        cy.contains('.news', 'Переглянути усі').should('be.visible');
    });
})