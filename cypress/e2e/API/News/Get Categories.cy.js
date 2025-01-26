import Ajv from 'ajv';

describe('Get Categories', () => {
  const ajv = new Ajv();  // Initialize the validator

  const schema = {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        id: { type: 'number' },
        name: { type: 'string' },
      },
      required: ['id', 'name'],
    },
  };

  it('Метод GET повинен повертати відповідь з обов\'язковими полями і перевірити схему', () => {
    cy.request('https://1000and1songs.com/api/v1/news/categories').then((response) => {
      // Check the response status
      expect(response).to.have.property('status', 200);
      expect(response.body).to.not.be.null;
  
      // Validate the schema
      const validate = ajv.compile(schema);
      const valid = validate(response.body);

      if (!valid) {
        cy.log(validate.errors);
        throw new Error('Schema validation failed');
      }

      // Check that each object has the required keys
      response.body.forEach((category) => {
        expect(category).to.have.all.keys('id', 'name');
      });
    });
  });
});
