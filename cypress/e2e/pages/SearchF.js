import { faker } from '@faker-js/faker';

class SearchF {
  get selectors() {
    return {
      searchIcon: '.search-img',
      searchInput: '#mat-input-0',
      searchAutocomplete: '#mat-autocomplete-0',
      searchOptionsBox: '.search__options-box'
    };
  }

  validateSearchField() {
    cy.get(this.selectors.searchIcon).click({ force: true });
  }

  inputValidData() {
    cy.get(this.selectors.searchInput).type('піс');
  }

  inputInvalidData() {
    cy.get(this.selectors.searchInput).clear().type(faker.word.adjective(3));
  }

  validateSearchValidData() {
    cy.get(this.selectors.searchAutocomplete).should('be.visible');
  }

  validateSearchInvalidData() {
    cy.get(this.selectors.searchOptionsBox).contains('За вашим запитом нічого не знайдено').should('be.visible');
  }
}

export default SearchF;




// import { faker } from '@faker-js/faker';
// class SearchF {
//     validateSearchField() {
//         cy.get('.search-img').click({ force: true })
//     }
//     inputValidData() {
//         cy.get('#mat-input-0').type('піс');
//     }
//     inputInvalidData() {
//         cy.get('#mat-input-0').clear().type(faker.word.adjective(3));
//     }
//     validateSearchValidData() {
//         cy.get('#mat-autocomplete-0').should('be.visible')
//     }
//     validateSearchInvalidData() {
//         cy.get('.search__options-box').contains('За вашим запитом нічого не знайдено').should('be.visible')
//     }
// }
// export default SearchF;