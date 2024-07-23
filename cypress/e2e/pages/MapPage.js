class MapP {
    validateMapBtn() {
        cy.get(':nth-child(4) > .menu-list__item-link').click();
        cy.location('protocol').should('eq', 'https:');
        cy.url().should('include', 'map');
    }
    validateHeaderContainer() {
        cy.get('.header').should('be.visible');
    }
    validateFooterContainer() {
        cy.get('.footer').should('be.visible');
    }
    validateMapContainer() {
        cy.get('.map').should('be.visible');
        cy.contains('.map', 'Фільтр').should('be.visible');
        cy.get('.filter__header').should('be.visible');
    }
    validateSongsContainer() {
        cy.get('.songs').should('be.visible');
    }
    validateSongsCounter() {
        cy.get('.songs__counter').contains('Кількість знайдених').should('be.visible');
    }
    validatePlaylist() {
        cy.get('.playlist__song__card').should('be.visible');
    }
    validateSongCard() {
        cy.get('.playlist__song__card').should('be.visible');
    }
    validateBtnsSongCard() {
        cy.get('.playlist__song__card');
            .find('.song__card__img, .song__card__btn.btn-detail.ng-star-inserted, .listen__desktop');
            .should('be.visible');
    }
}
export default MapP;