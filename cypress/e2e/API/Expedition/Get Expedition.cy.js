describe('API Tests', () => {
    it('should return a successful response from the API', () => {
        const expeditionId = 1;

        cy.request({
            method: 'GET',
            url: `https://1000and1songs.com/api/v1/expedition/${expeditionId}`,

        }).then((response) => {
            expect(response.body).to.not.be.null;

            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('title').that.is.a('string');
            expect(response.body).to.have.property('location').that.is.a('string');
            expect(response.body).to.have.property('short_description').that.is.a('string');
            expect(response.body).to.have.property('expedition_date').that.matches(/\d{4}-\d{2}-\d{2}/);
            expect(response.body).to.have.property('map_photo').that.is.a('string');
            expect(response.body).to.have.property('category').that.is.an('object');
            expect(response.body.category).to.have.property('id').that.is.a('number');
            expect(response.body.category).to.have.property('name').that.is.a('string');
            expect(response.body).to.have.property('content').that.is.a('string');
            expect(response.body).to.have.property('authors').that.is.an('array');
            expect(response.body.authors[0]).to.be.a('string');
            expect(response.body).to.have.property('editors').that.is.an('array');
            expect(response.body.editors[0]).to.be.a('string');
            expect(response.body).to.have.property('photographers').that.is.an('array');
            expect(response.body.photographers[0]).to.be.a('string');
            expect(response.body).to.have.property('recording').that.is.an('array');
            expect(response.body.recording[0]).to.be.a('string');
        });
    });
});


