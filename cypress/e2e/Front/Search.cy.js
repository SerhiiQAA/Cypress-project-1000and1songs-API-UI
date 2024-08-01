///<reference types="Cypress"/>

import SearchF from "../pages/SearchF.js";

describe('Search', () => {
    it('Valid_data', () => {
        cy.viewport(1280, 1020);
        cy.visit('/');

        const Search = new SearchF();

        Search.validateSearchField()
        Search.inputValidData()
        Search.validateSearchValidData()
        cy.reload()
    });

    it('Invalid_data', () => {
        cy.viewport(1280, 1020);
        cy.visit('/');

        const Search = new SearchF();

        Search.validateSearchField()
        Search.inputInvalidData()
        Search.validateSearchInvalidData()
    });
})