describe('Get News', () => {
    it('Метод GET повинен повертати відповідь з обовязковими полями', () => {
      cy.request('https://1000and1songs.com/api/v1/news/news').then((response) => {
        expect(response).to.have.property('status', 200);
        expect(response.body).to.not.be.null;
  
        // Перевірка наявності обов'язкових ключів в кожному об'єкті масиву
        response.body.items.forEach((category) => {
          expect(category).to.have.all.keys(
            'id',
            'title',
            'short_description',
            'preview_photo',
            'created_at',
            'category',
            'location'
          );
        });
      });
    });
  });