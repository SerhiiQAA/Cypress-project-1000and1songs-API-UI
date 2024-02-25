describe('Get Education', () => {
    it('method get response code should be  200', () => {
      cy.request('https://1000and1songs.com/api/v1/education').then(response => {
        expect(response).to.have.property('status',200);
        expect(response.body).to.not.be.null;
        // expect(response.body).to.have.property('reporting');
        const expectedKeys = [
            "title",
            "description",
            "recommendations", 
            "recommended_sources",
            "calendar_and_ritual_categories",
          ];    
          // Перевірка наявності кожного ключа
          expectedKeys.forEach((key) => {
            expect(response.body).to.have.property(key);
        });
      }) 
    })
})