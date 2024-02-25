describe('Map page', () => {
    it('Map page', () => {
        cy.viewport(1280, 1020)
        cy.visit('https://1000and1songs.com/#/')
        cy.get(':nth-child(4) > .menu-list__item-link').click()
        cy.location('protocol').should('eq', 'https:')
        cy.url().should('include', 'map')
        // Header
        cy.get('.header').should('be.visible')
        // Footer
        cy.get('.footer').should('be.visible')
        //Map container  
        cy.get('.map').should('be.visible')
        cy.contains('.map', 'Фільтр').should('be.visible');
        cy.get('.filter__header').should('be.visible')
        // +/- map
        cy.get('.gmnoprint').should('be.visible')
        // Songs__container
        cy.get('.songs').should('be.visible')
        // Songs counter
        cy.get('.songs__counter').contains('Кількість знайдених').should('be.visible')
        // Player
        cy.get('.songs__player').contains('Слухати всі знайдені пісні ').should('be.visible')
        // Playlist
        cy.get('.playlist__song__card').should('be.visible')
        // Song_card
        cy.get('.playlist__song__card').should('be.visible')
        // Buttons_song_card
        cy.get('.playlist__song__card')
            .find('.song__card__img, .song__card__btn.btn-detail.ng-star-inserted, .listen__desktop')
            .should('be.visible');
    });
})