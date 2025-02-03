class MapP {
    get selectors() {
      return {
        mapBtn: ':nth-child(4) > .menu-list__item-link',
        headerContainer: '.header',
        footerContainer: '.footer',
        mapContainer: '.map',
        filterHeader: '.filter__header',
        songsContainer: '.songs',
        songsCounter: '.songs__counter',
        playlistSongCard: '.playlist__song__card',
        songCardElements: '.song__card__img, .song__card__btn.btn-detail.ng-star-inserted, .listen__desktop'
      };
    }
  
    validateMapBtn() {
      cy.get(this.selectors.mapBtn).click();
      cy.location('protocol').should('eq', 'https:');
      cy.url().should('include', 'map');
    }
  
    validateHeaderContainer() {
      cy.get(this.selectors.headerContainer).should('be.visible');
    }
  
    validateFooterContainer() {
      cy.get(this.selectors.footerContainer).should('be.visible');
    }
  
    validateMapContainer() {
      cy.get(this.selectors.mapContainer).should('be.visible');
      cy.contains(this.selectors.mapContainer, 'Фільтр').should('be.visible');
      cy.get(this.selectors.filterHeader).should('be.visible');
    }
  
    validateSongsContainer() {
      cy.get(this.selectors.songsContainer).should('be.visible');
    }
  
    validateSongsCounter() {
      cy.get(this.selectors.songsCounter).contains('Кількість знайдених').should('be.visible');
    }
  
    validatePlaylist() {
      cy.get(this.selectors.playlistSongCard).should('be.visible');
    }
  
    validateSongCard() {
      cy.get(this.selectors.playlistSongCard).should('be.visible');
    }
  
    validateBtnsSongCard() {
      cy.get(this.selectors.playlistSongCard)
        .find(this.selectors.songCardElements)
        .should('be.visible');
    }
  }
  
  export default MapP;
  