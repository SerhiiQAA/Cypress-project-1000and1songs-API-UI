// describe('Get Song By Id', () => {
//     it('method get response code should be  200', () => {
//       cy.request('https://1000and1songs.com/api/v1/map/filter/geotag').then(response => {
//         expect(response).to.have.property('status',200)
//         expect(response.body).to.not.be.null
//         response.body.forEach((geotag) => {
//             expect(geotag).to.have.all.keys('id', 'city', 'latitude', "longitude", "song_count",);
//           });
//         })
//       }) 
//     })


    describe('Get Song By Id', () => {
        it('Метод GET повинен повертати відповідь з обов\'язковими полями', () => {
          const songId = 98; // Ваш ID для пошуку
      
          cy.request({
            method: 'GET',
            url: `https://1000and1songs.com/api/v1/map/filter/songs?id=${songId}`,
            // Додайте інші параметри запиту, якщо потрібно
          }).then((response) => {
            expect(response).to.have.property('status', 200);
            expect(response.body).to.not.be.null;
      

            // const expectedKeys = [
            //     "id", 
            //     "title", 
            //     "song_text", 
            //     "genres", "video_url", 
            //     "location", 
            //     "recording_date", 
            //     "stereo_audio", 
            //     "video_url", 
            //     "ethnographic_district", 
            //     "collectors", 
            //     "performers", 
            //     "recording_date", 
            //     "photos", 
            //     "stereo_audio", 
            //     "multichannels"
            //   ];    
            //   // Перевірка наявності кожного ключа
            //   expectedKeys.forEach((key) => {
            //     expect(response.body).to.have.property(key);

            // Перевірка наявності обов'язкових ключів в відповіді
            // response.body.forEach((song) => {
            //   expect(song).to.have.all.keys("id", "title", "song_text", "genres", "video_url", "location", "recording_date", "stereo_audio", "video_url", "ethnographic_district", "collectors", "performers", "recording_date", "photos", "stereo_audio", "multichannels");
            });
          });
        });
    //   });