import { faker } from '@faker-js/faker';

describe('Search', () => {
    it('Valid_data', () => {
        cy.viewport(1280, 1020);
        cy.visit('/');
        cy.get('.search-img').click({ force: true })
        cy.get('#mat-input-0').type('піс')
        cy.get('#mat-autocomplete-0').should('be.visible')
    });

    it('Invalid_data', () => {
        cy.viewport(1280, 1020);
        cy.visit('/');
        cy.get('.search-img').click({ force: true })
        cy.get('#mat-input-0').type(faker.word.adjective(3))
        cy.get('.search__options-box').contains('За вашим запитом нічого не знайдено').should('be.visible')
    });
})