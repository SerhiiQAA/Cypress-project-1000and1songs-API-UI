class FilterM {
    get selectors() {
      return {
        filterBtn: ':nth-child(4) > .menu-list__item-link',
        filterHeader: '.filter__header',
        filterBody: '.filter__body',
        inputField: '#mat-input-0'
      };
    }
  
    validateFilterBtn() {
      cy.get(this.selectors.filterBtn).click();
      cy.location('protocol').should('eq', 'https:');
      cy.get(this.selectors.filterHeader).should('be.visible')
        .contains('Фільтр')
        .click();
    }
  
    validateFilterContainer() {
      cy.get(this.selectors.filterBody).should('be.visible')
        .within(() => {
          cy.contains('Пошук');
          cy.contains('Місцевість');
          cy.contains('Пісня');
          cy.contains('Сховати фільтр');
        });
    }
  
    validateInputData() {
      cy.get(this.selectors.inputField).type('Зозуленька', { delay: 0 })
        .should('have.value', 'Зозуленька');
    }
  }
  
  export default FilterM;
  

// class FilterM {
//     validateFilterBtn() {
//         cy.get(':nth-child(4) > .menu-list__item-link').click();
//         cy.location('protocol').should('eq', 'https:');
//         cy.get('.filter__header').should('be.visible')
//             .contains('Фільтр')
//             .click();
//     }
//     validateFilterContainer() {
//         cy.get('.filter__body').should('be.visible')
//             .within(() => {
//                 cy.contains('Пошук');
//                 cy.contains('Місцевість');
//                 cy.contains('Пісня');
//                 cy.contains('Сховати фільтр');
//             })
//     }
//     validateInputData() {
//         cy.get('#mat-input-0').type('Зозуленька', { delay: 0 })
//             .should('have.value', 'Зозуленька');
//     }
// }
// export default FilterM;