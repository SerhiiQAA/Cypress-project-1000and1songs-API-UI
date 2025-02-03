class SupportM {
    get selectors() {
      return {
        supportsBtn: '.actions__donate',
        donationContainer: '.donation',
        donationTitle: '.donation__title',
        donationCredentials: '.donation__credentials',
        donationPurposeTitle: '.donation__purpose-title',
        donationPurposeMessage: '.donation__purpose-message',
        donationActions: '.donation__actions-options',
        qrCode: 'div.mat-mdc-dialog-actions:nth-child(1) > img:nth-child(1)',
        closeDonationBtn: '.donation__close-btn'
      };
    }
  
    validateSupportsBtn() {
      cy.get(this.selectors.supportsBtn).click();
      cy.location('protocol').should('eq', 'https:');
      cy.get(this.selectors.donationContainer).should('be.visible');
      cy.contains(this.selectors.donationTitle, 'ГО "МУЗЕЙ КОЛИСКОВОЇ"').should('be.visible');
    }
  
    // validateHeaderContainer() {
    //     cy.get('.header').should('be.visible')
    // }
    // validateFooterContainer() {
    //     cy.get('.footer').should('be.visible')
    // }
  
    validateDonationCredentials() {
      cy.get(this.selectors.donationCredentials).should('be.visible');
    }
  
    validateDonationPurposeTitle() {
      cy.get(this.selectors.donationPurposeTitle).should('be.visible');
      cy.get(this.selectors.donationPurposeMessage).should('be.visible');
    }
  
    validateDonationActions() {
        cy.get(this.selectors.qrCode).should('be.visible');
        cy.contains('QRкод (Приват24)').should('be.visible');
        cy.get(this.selectors.donationActions).should('be.visible')
          .within(() => {
            cy.get('button.donation__actions-button').should('be.visible');
            cy.get('a.donation__actions-button:nth-child(2)').should('be.visible');
            cy.get('a.donation__actions-button:nth-child(3)').should('be.visible');
          });
      }

    validateCloseDonationModal() {
      cy.get(this.selectors.closeDonationBtn).should('be.visible');
      cy.get(this.selectors.closeDonationBtn).click();
      cy.get(this.selectors.donationContainer).should('not.exist');
    }
  }
  
  export default SupportM;
  