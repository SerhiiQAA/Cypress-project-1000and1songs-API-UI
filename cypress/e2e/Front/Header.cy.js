import HeaderP from "../pages/HeaderContainer.js";
describe('Header', () => {

    it('Header', () => {

        cy.pixeleyeSnapshot({
            name: "landing-header",
          });

        cy.viewport(1280, 1020);
        cy.visit('/');
        cy.injectAxe();
        cy.checkA11y();

        const Header = new HeaderP();
        
        Header.validateHeaderContainer();
        Header.validateLogo();
        Header.validateHeaderBtn();
        Header.validateSearchField();
        Header.validateDonateBtn(); 
    });
})