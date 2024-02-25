describe('Get About', () => {
    it('method get response code should be  200', () => {
      cy.request('https://1000and1songs.com/api/v1/about').then(response => {
        expect(response).to.have.property('status',200)
        expect(response.body).to.not.be.null
        const expectedKeys = [
            "id",
            "content"
          ];    
          // Перевірка наявності кожного ключа
          expectedKeys.forEach((key) => {
            expect(response.body).to.have.property(key);
          })
        })
      }) 
    })