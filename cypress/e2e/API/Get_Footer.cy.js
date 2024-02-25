describe('Get Footer', () => {
    it('method get response code should be  200', () => {
      cy.request('https://1000and1songs.com/api/v1/footer').then(response => {
        expect(response).to.have.property('status',200);
        expect(response.body).to.not.be.null;
        expect(response.body).to.have.property('reporting');
        const expectedKeys = [
            'reporting',
            'privacy_policy',
            'rules_and_terms',
            'email',
            'facebook_url',
            'youtube_url'
          ];    
          // Перевірка наявності кожного ключа
          expectedKeys.forEach((key) => {
            expect(response.body).to.have.property(key);
        });
      }) 
    })
})