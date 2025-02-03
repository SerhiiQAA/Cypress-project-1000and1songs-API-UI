class AboutP {
    getSelectors() {
      return {
        aboutBtn: ':nth-child(1) > .menu-list__item-link',
        headerContainer: '.header',
        footerContainer: '.footer',
        aboutContainer: '.about',
        teamContainer: '.team',
        donateBtn: '.actions__donate-button'
      };
    }
  
    validateAboutBtn() {
      cy.get(this.getSelectors().aboutBtn).click();
      cy.url().should('include', 'about');
    }
  
    validateHeaderContainer() {
      cy.get(this.getSelectors().headerContainer).should('be.visible');
    }
  
    validateFooterContainer() {
      cy.get(this.getSelectors().footerContainer).should('be.visible');
    }
  
    validateAboutContainer() {
      cy.get(this.getSelectors().aboutContainer).should('be.visible');
      cy.contains(this.getSelectors().aboutContainer, 'Про нас').should('be.visible');
    }
  
    validateTeamContainer() {
      cy.get(this.getSelectors().teamContainer).should('be.visible');
      cy.contains(this.getSelectors().teamContainer, 'Команда').should('be.visible');
    }
  
    validateDonateBtn() {
      cy.get(this.getSelectors().donateBtn).should('be.visible');
    }
  }
  
  export default AboutP;
  

// class AboutP {
//     validateAboutBtn(){
//         cy.get(':nth-child(1) > .menu-list__item-link').click();
//         cy.url().should('include', 'about');
//     }
//     validateHeaderContainer() {
//         cy.get('.header').should('be.visible');
//     }
//     validateFooterContainer() {
//         cy.get('.header').should('be.visible');
//     }
//     validateAboutContainer() {
//         cy.get('.about').should('be.visible');
//         cy.contains('.about', 'Про нас').should('be.visible');
//     }
//     validateTeamContainer() {
//         cy.get('.team').should('be.visible');
//         cy.contains('.team', 'Команда').should('be.visible');
//     }
//     validateDonateBtn() {
//         cy.get('.actions__donate-button').should('be.visible');
//     }
// }
// export default AboutP;