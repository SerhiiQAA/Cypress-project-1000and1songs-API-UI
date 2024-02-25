describe('Get Payment', () => {
    it('method get response code should be  200', () => {
      cy.request('https://1000and1songs.com/api/v1/payment').then(response => {
        expect(response).to.have.property('status',200)
        expect(response.body).to.not.be.null
        const expectedKeys = [
            "id",
            "organization_name",
            "edrpou",
            "bank",
            "info",
            "iban",
            "coffee_url",
            "patreon_url",
            "qr_code_url"
          ];    
          // Перевірка наявності кожного ключа
          expectedKeys.forEach((key) => {
            expect(response.body).to.have.property(key);
        })
      }) 
    })
})