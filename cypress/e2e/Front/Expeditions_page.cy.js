import ExpeditionsP from "../pages/ExpeditionsPage";

describe('Expeditions page', () => {
    it('Expeditions page', () => {
        cy.viewport(1280, 1020)
        cy.visit('/')

        const Expedition = new ExpeditionsP()

        Expedition.validateExpeditionsBtn()
        Expedition.validateHeaderContainer()
        Expedition.validateFooterContainer()
        Expedition.validateScienceContainer()
        Expedition.validateExpeditionsCategories()
        Expedition.validateExpeditionsFilter()
    });
})