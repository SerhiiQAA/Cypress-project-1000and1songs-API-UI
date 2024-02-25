describe('Get Categories', () => {
    it('Метод GET повинен повертати відповідь з обов\'язковими полями', () => {
      cy.request('https://1000and1songs.com/api/v1/news/categories').then((response) => {
        expect(response).to.have.property('status', 200);
        expect(response.body).to.not.be.null;
  
        // Перевірка наявності обов'язкових ключів в кожному об'єкті масиву
        response.body.forEach((category) => {
          expect(category).to.have.all.keys('id', 'name');
        });
      });
    });
  });