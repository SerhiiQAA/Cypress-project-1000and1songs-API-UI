import Ajv from 'ajv';

describe('Get Regions', () => {
  const ajv = new Ajv();  // Initialize the validator

  const schema = {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        id: { type: 'number' },
        name: { type: 'string' },
        song_count: { type: 'number' },
        country_id: { type: 'number' },
      },
      required: ['id', 'name', 'song_count', 'country_id'],
    },
  };

  it('method get response code should be 200 and validate schema', () => {
    cy.request('https://1000and1songs.com/api/v1/filter/location/regions').then(response => {
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
      response.body.forEach((partner) => {
        expect(partner).to.have.all.keys('id', "name", "song_count", "country_id");
      });
    });
  });
});
