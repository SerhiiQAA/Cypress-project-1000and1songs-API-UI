import HeaderP from "../pages/HeaderContainer.js";
describe('Header', () => {
    it('Header', () => {
        cy.viewport(1280, 1020)
        cy.visit('/')
        const Header = new HeaderP();
        Header.validateHeaderContainer();
        Header.validateLogo();
        Header.validateHeaderBtn();
        Header.validateSearchField();
        Header.validateDonateBtn();
    });
})