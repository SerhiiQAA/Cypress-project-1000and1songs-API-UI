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
  


// class HeaderP {
//     validateHeaderContainer() {
//         cy.get('header[class="header"]').should('be.visible');
//     }
//     validateLogo() {
//         cy.get('header[class="header"]').should('be.visible');
//     }
//     validateHeaderBtn() {
//         cy.contains('Про проєкт').should('be.visible');
//         cy.contains('Освітній розділ').should('be.visible');
//         cy.contains('Експедиції').should('be.visible');
//         cy.contains('Мапа').should('be.visible');
//         cy.contains('Новини').should('be.visible');
//     }
//     validateSearchField() {
//         cy.get('.search').should('be.visible');
//     }
//     validateDonateBtn() {
//         cy.get('.actions__donate-button').should('be.visible');
//     }
// }
// export default HeaderP;