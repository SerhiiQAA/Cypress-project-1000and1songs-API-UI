class ExpeditionsP {
    get selectors() {
      return {
        expeditionsBtn: ':nth-child(3) > .menu-list__item-link',
        headerContainer: '.header',
        footerContainer: '.footer',
        scienceContainer: '.expeditions',
        expeditionsGallery: '.expeditions__gallery',
        newsFilter: '.news__filter',
        event: '.event'
      };
    }
  
    validateExpeditionsBtn() {
      cy.get(this.selectors.expeditionsBtn).click();
      cy.location('protocol').should('eq', 'https:');
      cy.url().should('include', 'expeditions');
    }
  
    validateHeaderContainer() {
      cy.get(this.selectors.headerContainer).should('be.visible');
    }
  
    validateFooterContainer() {
      cy.get(this.selectors.footerContainer).should('be.visible');
    }
  
    validateScienceContainer() {
      cy.get(this.selectors.scienceContainer).should('be.visible');
      cy.contains(this.selectors.scienceContainer, 'Експедиції').should('be.visible');
    }
  
    validateExpeditionsCategories() {
      cy.get(this.selectors.expeditionsGallery).should('be.visible');    
    }
  
    validateExpeditionsFilter() {
      const buttonNames = ['Усі', 'Розвідка', 'Стаціонарна', 'Міждисциплінарна', 'Тематична', 'Відеозапис обряду', 'Цифровий запис'];
      buttonNames.forEach(buttonName => {
        cy.get(this.selectors.newsFilter).should('contain.text', buttonName);
      });
      cy.get(this.selectors.expeditionsGallery).find(this.selectors.event);
    }
  }
  
  export default ExpeditionsP;
  


// class ExpeditionsP {
//     validateExpeditionsBtn(){
//         cy.get(':nth-child(3) > .menu-list__item-link').click();
//         cy.location('protocol').should('eq', 'https:');
//         cy.url().should('include', 'expeditions');
//     }
//     validateHeaderContainer() {
//         cy.get('.header').should('be.visible');
//     }
//     validateFooterContainer() {
//         cy.get('.footer').should('be.visible');
//     }
//     validateScienceContainer() {
//         cy.get('.expeditions').should('be.visible');
//         cy.contains('.expeditions', 'Експедиції').should('be.visible');
//     }
//     validateExpeditionsCategories() {
//         cy.get('.expeditions__gallery').should('be.visible');    
//     }
//     validateExpeditionsFilter() {
//         const buttonNames = ['Усі', 'Розвідка', 'Стаціонарна', 'Міждисциплінарна', 'Тематична', 'Відеозапис обряду', 'Цифровий запис'];
//         buttonNames.forEach(buttonName => {
//             cy.get('.news__filter').should('contain.text', buttonName);
//         });
//         cy.get('.expeditions__gallery')
//         .find('.event');
//     }
// }
// export default ExpeditionsP;