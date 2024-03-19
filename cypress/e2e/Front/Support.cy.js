describe('Support', () => {
    it('Support', () => {
        cy.viewport(1280, 1020)
        cy.visit('https://1000and1songs.com/#/')
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
        cy.get('button.donation__actions-button').should('be.visible')
        .contains('Copy IBAN')
        cy.get('.donation__actions-options').should('be.visible')
        .contains('Buy Me A Coffe ')
        cy.get('.donation__actions-options').should('be.visible')
        .contains('Patreon')        
        // Close donation modal
        cy.get('.donation__close-btn').should('be.visible');
        cy.get('.donation__close-btn').click();
        cy.get('.donation').should('not.exist');
    });
})