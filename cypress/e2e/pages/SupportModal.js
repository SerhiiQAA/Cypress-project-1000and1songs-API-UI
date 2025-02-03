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
  








// class SupportM {
//     validateSupportsBtn() {
//         cy.get('.actions__donate').click();
//         cy.location('protocol').should('eq', 'https:');      
//         cy.get('.donation').should('be.visible');
//         cy.contains('.donation__title', 'ГО "МУЗЕЙ КОЛИСКОВОЇ"').should('be.visible');
//     }
//     // validateHeaderContainer() {
//     //     cy.get('.header').should('be.visible')
//     // }
//     // validateFooterContainer() {
//     //     cy.get('.footer').should('be.visible')
//     // }
//     validateDonationCredentials() {
//         cy.get('.donation__credentials').should('be.visible');
//     }
//     validateDonationPurposeTitle() {
//         cy.get('.donation__purpose-title').should('be.visible');
//         cy.get('.donation__purpose-message').should('be.visible');      
//     }
//     validateDonationActions() {
//         cy.get('div.mat-mdc-dialog-actions:nth-child(1) > img:nth-child(1)').should('be.visible');
//         cy.contains('QRкод (Приват24)').should('be.visible');
//         cy.get('.donation__actions-options').should('be.visible')
//         .within(()=>{
//         cy.contains('Copy IBAN');
//         cy.contains('Buy Me A Coffe');
//         cy.contains('Patreon');
//     }) 
//     }
//     validateCloseDonationModal() {
//         cy.get('.donation__close-btn').should('be.visible');
//         cy.get('.donation__close-btn').click();
//         cy.get('.donation').should('not.exist');
//     }
// }
// export default SupportM;