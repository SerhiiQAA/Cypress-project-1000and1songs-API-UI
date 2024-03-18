describe('Get Team', () => {
  it('should validate the response body', () => {
    cy.request({
      method: 'GET',
      url: 'https://1000and1songs.com/api/v1/team',
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array').that.is.not.empty;

      // Checking each object in an array
      response.body.forEach((item) => {
        expect(item).to.have.property('id').that.is.a('number');
        expect(item).to.have.property('full_name').that.is.a('string');
        expect(item).to.have.property('photo').that.is.a('string').and.matches(/^https:\/\/.*$/);
        expect(item).to.have.property('description').that.is.a('string');
      });
    });
  });
});