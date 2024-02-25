describe('Get Category', () => {
    it('Метод GET повинен повертати відповідь з обов\'язковими полями', () => {
      const songId = 1; // Ваш ID для пошуку
  
      cy.request({
        method: 'GET',
        url: `https://1000and1songs.com/api/v1/education/category/${songId}`,
        // Додайте інші параметри запиту, якщо потрібно
      }).then((response) => {
        expect(response).to.have.property('status', 200);
        expect(response.body).to.not.be.null;
    });
});
});