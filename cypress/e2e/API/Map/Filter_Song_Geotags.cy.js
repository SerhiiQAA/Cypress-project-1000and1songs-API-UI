describe('Get Filter Song Geotags', () => {
    it('method get response code should be  200', () => {
      cy.request('https://1000and1songs.com/api/v1/map/filter/geotag').then(response => {
        expect(response).to.have.property('status',200)
        expect(response.body).to.not.be.null
        response.body.forEach((geotag) => {
            expect(geotag).to.have.all.keys('id', 'city', 'latitude', "longitude", "song_count",);
          });
        })
      }) 
    })