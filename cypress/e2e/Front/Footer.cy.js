import FooterP from "../pages/FooterContainer";

describe('Footer', () => {
    it('Footer', () => {
        cy.viewport(1280, 1020);
        cy.visit('/');
        cy.injectAxe();
        cy.checkA11y();

        const Footer = new FooterP();
        
        Footer.validateFooterContainer();
        Footer.validateLogo();
        Footer.validateFooterBtn();
        Footer.validateDonateBtn();
        Footer.validatePartnersSection();
        Footer.validateDocumentation();
        Footer.validateGmail();
        Footer.validateSocialSection();
        Footer.validateRulesSection();
    });
})