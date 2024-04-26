class HeaderP {
    validateHeaderContainer() {
        cy.get('header[class="header"]').should('be.visible')
    }
    validateLogo() {
        cy.get('header[class="header"]').should('be.visible')
    }
    validateHeaderBtn() {
        cy.contains('Про проєкт').should('be.visible')
        cy.contains('Освітній розділ').should('be.visible')
        cy.contains('Експедиції').should('be.visible')
        cy.contains('Мапа').should('be.visible')
        cy.contains('Новини').should('be.visible')
    }
    validateSearchField() {
        cy.get('.search').should('be.visible')
    }
    validateDonateBtn() {
        cy.get('.actions__donate-button').should('be.visible')
    }
}
export default HeaderP;