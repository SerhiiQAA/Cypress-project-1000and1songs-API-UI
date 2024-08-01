import { faker } from '@faker-js/faker';
class SearchF {
    validateSearchField() {
        cy.get('.search-img').click({ force: true })
    }
    inputValidData() {
        cy.get('#mat-input-0').type('піс');
    }
    inputInvalidData() {
        cy.get('#mat-input-0').clear().type(faker.word.adjective(3));
    }
    validateSearchValidData() {
        cy.get('#mat-autocomplete-0').should('be.visible')
    }
    validateSearchInvalidData() {
        cy.get('.search__options-box').contains('За вашим запитом нічого не знайдено').should('be.visible')
    }
}
export default SearchF;