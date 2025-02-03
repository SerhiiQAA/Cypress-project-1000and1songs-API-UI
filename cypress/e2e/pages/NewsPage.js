class NewsP {
    get selectors() {
      return {
        newsBtn: ':nth-child(5) > .menu-list__item-link',
        headerContainer: '.header',
        footerContainer: '.footer',
        newsContainer: '.news',
        newsFilter: '.news__filter',
        newsCardElements: '.card__image-item, .card__title-name, .card__title-place',
        cardsWrap: '.cards__wrap',
        card: '.card',
        buttonNames: ['Усі', 'Зустрічі', 'Лекції', 'Публікації', 'Майстер-класи', 'Концерти', 'Конференції']
      };
    }
  
    validateNewsBtn() {
      cy.get(this.selectors.newsBtn).click();
      cy.location('protocol').should('eq', 'https:');
      cy.url().should('include', 'news');
    }
  
    validateHeaderContainer() {
      cy.get(this.selectors.headerContainer).should('be.visible');
    }
  
    validateFooterContainer() {
      cy.get(this.selectors.footerContainer).should('be.visible');
    }
  
    validateNewsContainer() {
      cy.get(this.selectors.newsContainer).should('be.visible');
      cy.contains(this.selectors.newsContainer, 'Новини').should('be.visible');
    }
  
    validateNewsFilter() {
      cy.get(this.selectors.newsFilter).should('be.visible');
    }
  
    validateBtnFilter() {
      this.selectors.buttonNames.forEach(buttonName => {
        cy.get(this.selectors.newsFilter).should('contain.text', buttonName);
      });
    }
  
    validateNewsCard() {
      cy.get(this.selectors.cardsWrap).find(this.selectors.newsCardElements).should('be.visible');
    }
  
    validateCardsCount() {
      cy.get(this.selectors.cardsWrap).find(this.selectors.card);
    }
  }
  
  export default NewsP;
  