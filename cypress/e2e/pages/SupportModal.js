class SupportM {
    validateSupportsBtn() {
        cy.get('.actions__donate').click();
        cy.location('protocol').should('eq', 'https:');      
        cy.get('.donation').should('be.visible');
        cy.contains('.donation__title', 'ГО "МУЗЕЙ КОЛИСКОВОЇ"').should('be.visible');
    }
    // validateHeaderContainer() {
    //     cy.get('.header').should('be.visible')
    // }
    // validateFooterContainer() {
    //     cy.get('.footer').should('be.visible')
    // }
    validateDonationCredentials() {
        cy.get('.donation__credentials').should('be.visible');
    }
    validateDonationPurposeTitle() {
        cy.get('.donation__purpose-title').should('be.visible');
        cy.get('.donation__purpose-message').should('be.visible');      
    }
    validateDonationActions() {
        cy.get('div.mat-mdc-dialog-actions:nth-child(1) > img:nth-child(1)').should('be.visible');
        cy.contains('QRкод (Приват24)').should('be.visible');
        cy.get('.donation__actions-options').should('be.visible');
        .within(()=>{
        cy.contains('Copy IBAN');
        cy.contains('Buy Me A Coffe');
        cy.contains('Patreon');
    }) 
    }
    validateCloseDonationModal() {
        cy.get('.donation__close-btn').should('be.visible');
        cy.get('.donation__close-btn').click();
        cy.get('.donation').should('not.exist');
    }
}
export default SupportM;