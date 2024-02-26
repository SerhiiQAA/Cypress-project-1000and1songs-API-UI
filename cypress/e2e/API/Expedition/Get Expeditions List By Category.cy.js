describe('API Tests', () => {
  it('should return valid response from the API', () => {
    cy.request('GET', 'https://1000and1songs.com/api/v1/expedition/filter') // Replace with your actual API endpoint
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.not.be.null
        expect(response.body).to.have.property('items').that.is.an('array');
        expect(response.body.items[0]).to.have.property('id').that.is.a('number');
        expect(response.body.items[0]).to.have.property('title').that.is.a('string');
        expect(response.body.items[0]).to.have.property('location').that.is.a('string');
        expect(response.body.items[0]).to.have.property('short_description').that.is.a('string');
        expect(response.body.items[0]).to.have.property('expedition_date').that.matches(/\d{4}-\d{2}-\d{2}/);
        expect(response.body.items[0]).to.have.property('preview_photo').that.is.a('string');
        expect(response.body).to.have.property('total').that.is.a('number');
        expect(response.body).to.have.property('page').that.is.a('number');
        expect(response.body).to.have.property('size').that.is.a('number');
        expect(response.body).to.have.property('pages').that.is.a('number');
      });
  });
});