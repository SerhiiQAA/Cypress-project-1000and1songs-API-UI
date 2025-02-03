class FooterP {
    get selectors() {
      return {
        footerContainer: '.footer',
        logo: '.footer__logo',
        donateBtn: '.footer__donate',
        contactsEmail: '.contacts__email',
        footerBtns: [
          'Про проєкт',
          'Освітній розділ',
          'Експедиції',
          'Мапа',
          'Новини'
        ],
        partnersSection: 'Наші партнери',
        documentation: [
          'Звітність',
          'Політика приватності',
          'Правила та умови використання'
        ],
        rulesSection: 'Team Baza Trainee Ukraine 2024 © Всі права захищені'
      };
    }
  
    validateFooterContainer() {
      cy.get(this.selectors.footerContainer).should('be.visible');
    }
  
    validateLogo() {
      cy.get(this.selectors.logo).should('be.visible');
    }
  
    validateFooterBtn() {
      this.selectors.footerBtns.forEach(btnText => {
        cy.contains(this.selectors.footerContainer, btnText).should('be.visible');
      });
    }
  
    validateDonateBtn() {
      cy.get(this.selectors.donateBtn).should('be.visible');
    }
  
    validatePartnersSection() {
      cy.contains(this.selectors.footerContainer, this.selectors.partnersSection).should('be.visible');
    }
  
    validateDocumentation() {
      this.selectors.documentation.forEach(docText => {
        cy.contains(this.selectors.footerContainer, docText).should('be.visible');
      });
    }
  
    validateGmail() {
      cy.get(this.selectors.contactsEmail).should('be.visible');
    }
  
    validateSocialSection() {
      cy.get(this.selectors.donateBtn).should('be.visible');
    }
  
    validateRulesSection() {
      cy.contains(this.selectors.footerContainer, this.selectors.rulesSection).should('be.visible');
    }
  }
  
  export default FooterP;
 