class FilterM {
    validateFilterBtn() {
        cy.get(':nth-child(4) > .menu-list__item-link').click();
        cy.location('protocol').should('eq', 'https:');
        cy.get('.filter__header').should('be.visible');
            .contains('Фільтр');
            .click();
    }
    validateFilterContainer() {
        cy.get('.filter__body').should('be.visible');
            .within(() => {
                cy.contains('Пошук');
                cy.contains('Місцевість');
                cy.contains('Пісня');
                cy.contains('Сховати фільтр');
            })
    }
    validateInputData() {
        cy.get('#mat-input-1').type('Зозуленька', {delay:0});
            .should('have.value', 'Зозуленька');
    }
}
export default FilterM;