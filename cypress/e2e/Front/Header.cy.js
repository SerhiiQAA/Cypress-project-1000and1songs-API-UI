describe('Header', () => {
    it('Header',() => {
        cy.viewport(1280, 1020)
        cy.visit('https://1000and1songs.com/#/')

        cy.get('header[class="header"]').should('be.visible')         
    
        cy.get('.logo').should('be.visible')


        cy.contains('Про проєкт').should('be.visible')
        cy.contains('Освітній розділ').should('be.visible')
        cy.contains('Експедиції').should('be.visible')
        cy.contains('Мапа').should('be.visible')
        cy.contains('Новини').should('be.visible')

        cy.get('.search').should('be.visible')

        cy.get('.actions__donate-button').should('be.visible')
      });
})