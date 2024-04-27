class EducationP {
    validateEducationBtn(){
        cy.get(':nth-child(2) > .menu-list__item-link').click()
        cy.location('protocol').should('eq', 'https:')
        cy.url().should('include', 'education')
    }
    validateHeaderContainer() {
        cy.get('.header').should('be.visible')
    }
    validateFooterContainer() {
        cy.get('.footer').should('be.visible')
    }
    validateScienceContainer() {
        cy.get('.science').should('be.visible')
        cy.contains('.science', 'Освітній розділ').should('be.visible');
    }
    validateCarouselBtn() {
        cy.get('.card').should('be.visible')
        cy.get('.science__gallery')
        .find('.card')
        .should('have.length', 9); 
    }
    validateRecomendation() {
        cy.get('#mat-expansion-panel-header-0').should('be.visible')
        .contains('Рекомендації')
        cy.get('#mat-expansion-panel-header-1').should('be.visible')
        .contains('Рекомендовані джерела')
    }
}
export default EducationP;