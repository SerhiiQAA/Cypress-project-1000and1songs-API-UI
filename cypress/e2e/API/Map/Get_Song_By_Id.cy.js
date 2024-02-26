
describe('Get Song By Id', () => {
  it('Метод GET повинен повертати відповідь з обов\'язковими полями', () => {
    const songId = 1;

        cy.request({
          method: 'GET',
          url: `https://1000and1songs.com/api/v1/map/filter/songs/${songId}`,
        }).then((response) => {
          expect(response).to.have.property('status', 200);
          expect(response.body).to.not.be.null;

        const expectedKeys = [
          "id",
          "title",
          "song_text", 
          "genres", 
          "video_url", 
          "location", 
          "recording_date", 
          "stereo_audio", 
          "video_url", 
          "ethnographic_district", 
          "collectors", 
          "performers", 
          "recording_date", 
          "photos", 
          "stereo_audio", 
          "multichannels"
        ];
        // // Перевірка наявності кожного ключа
        expectedKeys.forEach((key) => {
          expect(response.body).to.have.property(key);

        //   // e.all.keys("id", "title", "song_text", "genres", "video_url", "location", "recording_date", "stereo_audio", "video_url", "ethnographic_district", "collectors", "performers", "recording_date", "photos", "stereo_audio", "multichannels");
        });
      });
    });
  })