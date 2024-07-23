class AboutP {
    validateAboutBtn(){
        cy.get(':nth-child(1) > .menu-list__item-link').click();
        cy.url().should('include', 'about');
    }
    validateHeaderContainer() {
        cy.get('.header').should('be.visible');
    }
    validateFooterContainer() {
        cy.get('.header').should('be.visible');
    }
    validateAboutContainer() {
        cy.get('.about').should('be.visible');
        cy.contains('.about', 'Про нас').should('be.visible');
    }
    validateTeamContainer() {
        cy.get('.team').should('be.visible');
        cy.contains('.team', 'Команда').should('be.visible');
    }
    validateDonateBtn() {
        cy.get('.actions__donate-button').should('be.visible');
    }
}
export default AboutP;