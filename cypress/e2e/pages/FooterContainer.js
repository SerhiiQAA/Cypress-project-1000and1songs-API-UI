class FooterP {
    validateFooterContainer() {
        cy.get('.footer').should('be.visible');
    }
    validateLogo() {
        cy.get('.footer__logo').should('be.visible');
    }
    validateFooterBtn() {
        cy.contains('.footer', 'Про проєкт').should('be.visible');
        cy.contains('.footer', 'Освітній розділ').should('be.visible');
        cy.contains('.footer', 'Експедиції').should('be.visible');
        cy.contains('.footer', 'Мапа').should('be.visible');
        cy.contains('.footer', 'Новини').should('be.visible');
    }
    validateDonateBtn() {
        cy.get('.footer__donate').should('be.visible');
    }
    validatePartnersSection() {
        cy.contains('.footer', 'Наші партнери').should('be.visible');
    }
    validateDocumentation() {
        cy.contains('.footer', 'Звітність').should('be.visible');
        cy.contains('.footer', 'Політика приватності').should('be.visible');
        cy.contains('.footer', 'Правила та умови використання').should('be.visible');
    }
    validateGmail() {
        cy.get('.contacts__email').should('be.visible');
    }
    validateSocialSection() {
        cy.get('.footer__donate').should('be.visible');
    }
    validateRulesSection() {
        cy.contains('.footer', 'Team Baza Trainee Ukraine 2024 © Всі права захищені').should('be.visible');
    }
}
export default FooterP;