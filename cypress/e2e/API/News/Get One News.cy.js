describe('Get One News', () => {
    it('Метод GET повинен повертати відповідь з обов\'язковими полями', () => {
      const itemId = 1; // Ваш ID для пошуку
  
      cy.request({
        method: 'GET',
        url: `https://1000and1songs.com/api/v1/news/news/${itemId}`,
        // Додайте інші параметри запиту, якщо потрібно
      }).then((response) => {
        expect(response).to.have.property('status', 200);
        expect(response.body).to.not.be.null;
  
        // Перевірка наявності обов'язкових ключів в відповіді
        expect(response.body).to.have.all.keys(
          'id',
          'title',
          'short_description',
          'preview_photo',
          'created_at',
          'category',
          'location',
          'content',
          'authors',
          'editors',
          'photographers'
        );
      });
    });
  });