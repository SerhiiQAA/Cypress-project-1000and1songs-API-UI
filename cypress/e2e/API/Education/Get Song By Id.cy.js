describe('Get Song By Id', () => {
    it('Метод GET повинен повертати відповідь з обов\'язковими полями', () => {
      const songId = 1; // Ваш ID для пошуку
  
      cy.request({
        method: 'GET',
        url: `https://1000and1songs.com/api/v1/education/genre/song/${songId}`,
        // Додайте інші параметри запиту, якщо потрібно
      }).then((response) => {
        expect(response).to.have.property('status', 200);
        expect(response.body).to.not.be.null;

        const expectedKeys = [
            "id",
            "genres",
            "title",        
            "stereo_audio",
            "song_text",
            "song_description",
            "location",
            "ethnographic_district",
            "collectors",
            "performers",
            "video_url",
            "comment_map",
            "map_photo",
            "photos"


          ];    
          // Перевірка наявності кожного ключа
          expectedKeys.forEach((key) => {
            expect(response.body).to.have.property(key);
        });
    });
});
});