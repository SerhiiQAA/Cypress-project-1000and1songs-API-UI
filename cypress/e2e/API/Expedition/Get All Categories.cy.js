describe('Get All Categories', () => {
    it('should return the correct response body', () => {
      cy.request('GET', 'https://1000and1songs.com/api/v1/expedition/categories') // Замініть на свій API-шлях
        .its('body')
        .should('deep.equal', [
          {
            id: 1,
            name: 'Розвідка',
          },
          {
            id: 2,
            name: 'Статичний',
          },
          {
            id: 3,
            name: 'Міждисциплінарна',
          },
          {
            id: 4,
            name: 'Тематична',
          },
          {
            id: 5,
            name: 'Відеозапис обряду',
          },
          {
            id: 6,
            name: 'Цифровий запис',
          },
        ]);
    });
  });