describe('Header', () => {
    it('Header', () => {
        cy.viewport(1280, 1020)
        cy.visit('/')
        // Header
        cy.get('header[class="header"]').should('be.visible')
        // Logo    
        cy.get('.logo').should('be.visible')
        // Navigation buttons
        cy.contains('Про проєкт').should('be.visible')
        cy.contains('Освітній розділ').should('be.visible')
        cy.contains('Експедиції').should('be.visible')
        cy.contains('Мапа').should('be.visible')
        cy.contains('Новини').should('be.visible')
        // Search field
        cy.get('.search').should('be.visible')
        // Donate button
        cy.get('.actions__donate-button').should('be.visible')
    });
})