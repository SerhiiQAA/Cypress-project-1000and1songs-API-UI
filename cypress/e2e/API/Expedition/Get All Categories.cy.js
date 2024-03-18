describe('Swagger Responses Test', () => {
  it('should validate the response body', () => {
    cy.request({
      method: 'GET',
      url: 'https://1000and1songs.com/api/v1/expedition/categories', 
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('title', 'Експедиції');
      expect(response.body).to.have.property('description').that.is.a('string');
      expect(response.body).to.have.property('categories').that.is.an('array');

      // Check the availability of each category
      const expectedCategories = [
        'Розвідка',
        'Статичний',
        'Міждисциплінарна',
        'Тематична',
        'Відеозапис обряду',
        'Цифровий запис',
      ];
      response.body.categories.forEach((category) => {
        expect(expectedCategories).to.include(category.name);
      });
    });
  });
});
