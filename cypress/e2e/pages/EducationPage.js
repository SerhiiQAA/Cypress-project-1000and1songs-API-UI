class EducationP {
    get selectors() {
      return {
        educationBtn: ':nth-child(2) > .menu-list__item-link',
        headerContainer: '.header',
        footerContainer: '.footer',
        scienceContainer: '.science',
        carouselCard: '.card',
        scienceGallery: '.science__gallery',
        recomendationHeader0: '#mat-expansion-panel-header-0',
        recomendationHeader1: '#mat-expansion-panel-header-1'
      };
    }
  
    validateEducationBtn() {
      cy.get(this.selectors.educationBtn).click();
      cy.location('protocol').should('eq', 'https:');
      cy.url().should('include', 'education');
    }
  
    validateHeaderContainer() {
      cy.get(this.selectors.headerContainer).should('be.visible');
    }
  
    validateFooterContainer() {
      cy.get(this.selectors.footerContainer).should('be.visible');
    }
  
    validateScienceContainer() {
      cy.get(this.selectors.scienceContainer).should('be.visible');
      cy.contains(this.selectors.scienceContainer, 'Освітній розділ').should('be.visible');
    }
  
    validateCarouselBtn() {
      cy.get(this.selectors.carouselCard).should('be.visible');
      cy.get(this.selectors.scienceGallery)
        .find(this.selectors.carouselCard)
        .should('have.length', 9);
    }
  
    validateRecomendation() {
      cy.get(this.selectors.recomendationHeader0).should('be.visible')
        .contains('Рекомендації');
      cy.get(this.selectors.recomendationHeader1).should('be.visible')
        .contains('Рекомендовані джерела');
    }
  }
  
  export default EducationP;
  


// class EducationP {
//     validateEducationBtn() {
//         cy.get(':nth-child(2) > .menu-list__item-link').click();
//         cy.location('protocol').should('eq', 'https:');
//         cy.url().should('include', 'education');
//     }
//     validateHeaderContainer() {
//         cy.get('.header').should('be.visible');
//     }
//     validateFooterContainer() {
//         cy.get('.footer').should('be.visible');
//     }
//     validateScienceContainer() {
//         cy.get('.science').should('be.visible');
//         cy.contains('.science', 'Освітній розділ').should('be.visible');
//     }
//     validateCarouselBtn() {
//         cy.get('.card').should('be.visible');
//         cy.get('.science__gallery')
//         .find('.card')
//         .should('have.length', 9);
//     }
//     validateRecomendation() {
//         cy.get('#mat-expansion-panel-header-0').should('be.visible')
//         .contains('Рекомендації');
//         cy.get('#mat-expansion-panel-header-1').should('be.visible')
//         .contains('Рекомендовані джерела');
//     }
// }
// export default EducationP;