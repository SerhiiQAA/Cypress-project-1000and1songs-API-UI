import MapP from "../pages/MapPage.js";


describe('Map page', () => {
    it('Map page', () => {
        cy.viewport(1280, 1020)
        cy.visit('/')

        const Map = new MapP();

        Map.validateMapBtn()
        Map.validateHeaderContainer()
        Map.validateFooterContainer()
        Map.validateMapContainer()
        Map.validateSongsContainer()
        Map.validateSongsCounter()
        Map.validatePlaylist()
        Map.validateSongCard()
        Map.validateBtnsSongCard()
    });
})