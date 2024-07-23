import AboutP from "../pages/AboutPage";

describe('About page', () => {
    it('About page', () => {
        cy.viewport(1280, 1020);
        cy.visit('/');
        cy.injectAxe();
        cy.checkA11y();

        const About = new AboutP();

        About.validateAboutBtn();
        About.validateHeaderContainer();
        About.validateFooterContainer();
        About.validateAboutContainer();
        About.validateTeamContainer();
        About.validateDonateBtn();
    });
})