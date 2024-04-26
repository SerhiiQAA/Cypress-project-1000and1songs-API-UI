describe('Support', () => {
    it('Support', () => {
        cy.viewport(1280, 1020)
        cy.visit('/')
        cy.get('.actions__donate').click()
        cy.location('protocol').should('eq', 'https:')        
        cy.get('.donation').should('be.visible')
        cy.contains('.donation__title', 'ГО "МУЗЕЙ КОЛИСКОВОЇ"').should('be.visible');
        //Donation__credentials
        cy.get('.donation__credentials').should('be.visible')
        // Donation__purpose-title
        cy.get('.donation__purpose-title').should('be.visible')
        cy.get('.donation__purpose-message').should('be.visible');       
        // Donation__actions
        cy.get('div.mat-mdc-dialog-actions:nth-child(1) > img:nth-child(1)').should('be.visible')
        cy.contains('QRкод (Приват24)').should('be.visible');
        cy.get('.donation__actions-options').should('be.visible')
        .within(()=>{
        cy.contains('Copy IBAN')
        cy.contains('Buy Me A Coffe')
        cy.contains('Patreon')   
        })     
        // Close donation modal
        cy.get('.donation__close-btn').should('be.visible');
        cy.get('.donation__close-btn').click();
        cy.get('.donation').should('not.exist');
    });
})