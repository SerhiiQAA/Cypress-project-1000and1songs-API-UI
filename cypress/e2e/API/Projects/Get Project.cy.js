describe('Get Project', () => {
    it('Метод GET повинен повертати відповідь з обов\'язковими полями', () => {
      const projectId = 1;
  
      cy.request({
        method: 'GET',
        url: `https://1000and1songs.com/api/v1/projects/${projectId}`,
      }).then((response) => {
        expect(response).to.have.property('status', 200);
        expect(response.body).to.not.be.null;

          expect(response.status).to.eq(200);

          const expectedKeys = [
              "id",
              "title",
              "location",
              "project_date",
              "content",
              "authors",
              "editors",
              "photographers"
          ];    
          // Перевірка наявності кожного ключа
          expectedKeys.forEach((key) => {
            expect(response.body).to.have.property(key);
        });
        });
    });
});