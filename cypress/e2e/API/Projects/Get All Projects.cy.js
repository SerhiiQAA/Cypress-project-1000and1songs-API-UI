describe('Get All Projects', () => {
    it('method get response code should be  200', () => {
        cy.request('https://1000and1songs.com/api/v1/projects').then(response => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
            
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('items').that.is.a('array');
            // expect(response.body.items).to.have.property('id').that.is.a('number');
            // expect(response.body.items).to.have.property('title').that.is.a('string');
            // expect(response.body.items).to.have.property('short_description').that.is.a('string');
            // expect(response.body.items).to.have.property('preview_photo').that.is.a('string');

            expect(response.body).to.have.property('total').that.is.a('number');
            expect(response.body).to.have.property('page').that.is.a('number');
            expect(response.body).to.have.property('size').that.is.a('number');
            expect(response.body).to.have.property('pages').that.is.an('number');
            })
        })
    })
