import FilterM from "../pages/FilterModal.js";

describe('Filter map', () => {
    it('Filter', () => {
        cy.viewport(1280, 1020)
        cy.visit('/')

        const Filter = new FilterM();

        Filter.validateFilterBtn()
        Filter.validateFilterContainer()
        Filter.validateInputData()    
    });
})