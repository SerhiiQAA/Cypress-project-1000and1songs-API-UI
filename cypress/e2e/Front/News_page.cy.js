import NewsP from "../pages/NewsPage";

describe('News page', () => {
    it('News page', () => {
        cy.viewport(1280, 1020)
        cy.visit('/')

        const News = new NewsP()

        News.validateNewsBtn()
        News.validateHeaderContainer()
        News.validateFooterContainer()
        News.validateNewsContainer()
        News.validateNewsFilter()
        News.validateBtnFilter()
        News.validateNewsCard()
        News.validateCardsCount()
    });
})