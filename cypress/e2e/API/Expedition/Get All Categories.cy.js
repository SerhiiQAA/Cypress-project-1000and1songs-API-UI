// describe('Get All Categories', () => {
//     it('should return the correct response body', () => {
//       cy.request('GET', 'https://1000and1songs.com/api/v1/expedition/categories') // Замініть на свій API-шлях
//         .its('body')
//         .should('deep.equal', [
//           {
//             id: 1,
//             name: 'Розвідка',
//           },
//           {
//             id: 2,
//             name: 'Статичний',
//           },
//           {
//             id: 3,
//             name: 'Міждисциплінарна',
//           },
//           {
//             id: 4,
//             name: 'Тематична',
//           },
//           {
//             id: 5,
//             name: 'Відеозапис обряду',
//           },
//           {
//             id: 6,
//             name: 'Цифровий запис',
//           },
//         ]);
//     });
//   });


  describe('Get Partners', () => {
    it('method get response code should be  200', () => {
      cy.request('GET', 'https://1000and1songs.com/api/v1/expedition/categories')
    // }).then((response) => {
      expect(response).to.have.property('status', 200);
      expect(response.body).to.not.be.null;
      }) 
    })



  //   describe('Get Category', () => {
  //     it('Метод GET повинен повертати відповідь з обов\'язковими полями', () => {
  //       const songId = 2; // Ваш ID для пошуку
    
  //       cy.request({
  //         method: 'GET',
  //         url: `https://1000and1songs.com/api/v1/education/category/${songId}`,
  //         // Додайте інші параметри запиту, якщо потрібно
  //       }).then((response) => {
  //         expect(response).to.have.property('status', 200);
  //         expect(response.body).to.not.be.null;
  //     });
  // });
  // });