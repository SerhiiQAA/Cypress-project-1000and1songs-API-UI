class HeaderP {
    get selectors() {
      return {
        headerContainer: 'header[class="header"]',
        logo: 'header[class="header"]', // Можливо, тут потрібен інший селектор, якщо логотип має окремий клас
        headerBtns: [
          'Про проєкт',
          'Освітній розділ',
          'Експедиції',
          'Мапа',
          'Новини'
        ],
        searchField: '.search',
        donateBtn: '.actions__donate-button'
      };
    }
  
    validateHeaderContainer() {
      cy.get(this.selectors.headerContainer).should('be.visible');
    }
  
    validateLogo() {
      cy.get(this.selectors.logo).should('be.visible');
    }
  
    validateHeaderBtn() {
      this.selectors.headerBtns.forEach(btnText => {
        cy.contains(btnText).should('be.visible');
      });
    }
  
    validateSearchField() {
      cy.get(this.selectors.searchField).should('be.visible');
    }
  
    validateDonateBtn() {
      cy.get(this.selectors.donateBtn).should('be.visible');
    }
  }
  
  export default HeaderP;
  