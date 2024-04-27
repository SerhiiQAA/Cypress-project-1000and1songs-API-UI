import EducationP from "../pages/EducationPage";

describe('Educational section', () => {
    it('Educational section', () => {
        cy.viewport(1280, 1020)
        cy.visit('/')
        const Education = new EducationP()

        Education.validateEducationBtn()
        Education.validateHeaderContainer()
        Education.validateFooterContainer()
        Education.validateScienceContainer()
        Education.validateCarouselBtn()
        Education.validateRecomendation()
    });
})