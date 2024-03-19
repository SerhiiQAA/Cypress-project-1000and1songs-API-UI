describe('Educational section', () => {
    it('Educational section', () => {
        cy.viewport(1280, 1020)
        cy.visit('https://1000and1songs.com/#/')
        cy.get('.actions__donate').click()
        cy.location('protocol').should('eq', 'https:')
        
        cy.get('.donation ng-star-inserted').should('be.visible')
        cy.contains('.donation__title', 'ГО "МУЗЕЙ КОЛИСКОВОЇ"').should('be.visible');
        //Donation__credentials
        cy.get('.donation__credentials').should('be.visible')

        // Donation__purpose-title
        cy.get('.donation__purpose-title').should('be.visible')
        cy.get('.donation__purpose-message').should('be.visible');
        
        // Donation__actions
        cy.get('div.mat-mdc-dialog-actions:nth-child(1) > img:nth-child(1)').should('be.visible')
        .contains('QRкод (Приват24)')
        cy.get('button.donation__actions-button').should('be.visible')
        .contains('Copy IBAN')
    });
})