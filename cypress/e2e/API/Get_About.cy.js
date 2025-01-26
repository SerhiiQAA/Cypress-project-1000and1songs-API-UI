import Ajv from 'ajv';

describe('Get About', () => {
  const ajv = new Ajv();  // Initialize the validator

  const schema = {
    type: 'object',
    properties: {
      id: { type: 'number' },
      content: { type: 'string' },
    },
    required: ['id', 'content'],
  };

  it('method get response code should be 200 and validate schema', () => {
    cy.request('https://1000and1songs.com/api/v1/about').then(response => {
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

      // Check that each key is present
      const expectedKeys = [
        'id',
        'content'
      ];    
      expectedKeys.forEach((key) => {
        expect(response.body).to.have.property(key);
      });
    });
  });
});
