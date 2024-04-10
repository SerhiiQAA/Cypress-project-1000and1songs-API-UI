describe('Filter map', () => {
    it('Filter', () => {
        cy.viewport(1280, 1020)
        cy.visit('https://1000and1songs.com/#/')
        cy.get(':nth-child(4) > .menu-list__item-link').click()
        cy.location('protocol').should('eq', 'https:')        
// Filter button
        cy.get('.filter__header').should('be.visible')
        .contains('Фільтр')
        .click()
// Open filter
        cy.get('.filter__body').should('be.visible')
        .within(()=>{
        cy.contains('Сховати фільтр')
        cy.contains('Пошук')
        cy.contains('Місцевість')
        })   
// Input data by song title
        cy.get('#mat-input-1').should('be.visible')
        .type('Зозуленька{enter}')
// Check the search by song title
        cy.get('.song__card__header').should('be.visible')
        .contains('Зозуленька')
// Check the song card
        cy.get('.song__card__btn').should('be.visible')
        .contains('Деталі')
        .click()
        cy.wait(300)
        cy.get('.info__btn__more__detail').should('be.visible')
        .contains('Більше деталей')
        .click()
        cy.get('.song-page__text-title').should('be.visible')
        .contains('Зозуленька')
// Check the player
        cy.get('button[class="btn__player play ng-star-inserted"]').should('be.visible')
        .click()
        cy.wait(5000)
        cy.get('button[class="btn__player pause ng-star-inserted"]').should('be.visible')
        .click()
        cy.get('button[class="btn__player pause ng-star-inserted"]').should('not.exist')
        cy.get('button[class="btn__player play ng-star-inserted"]').should('exist')
    });
})