describe('Filter map', () => {
    it('Filter', () => {
        cy.viewport(1280, 1020);
        cy.visit('/map');
        // cy.injectAxe();
        // cy.checkA11y();
        cy.get(':nth-child(4) > .menu-list__item-link').click();
        cy.location('protocol').should('eq', 'https:');
        cy.get('.filter__header').should('be.visible')
            .contains('Фільтр')
            .click();
         
            cy.get('.filter__body').should('be.visible')
            .within(() => {
                cy.contains('Пошук');
                cy.contains('Місцевість');
                cy.contains('Пісня');
                cy.contains('Сховати фільтр');
            })
            cy.get('#mat-input-0').type('Зозуленька', {delay:0})
            .should('have.value', 'Зозуленька');            
    });
})