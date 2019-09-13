import assert, { AssertionError } from 'assert';
import superagent from 'superagent';

const request = superagent.agent();

describe('Check if postgres is connected with API', () => {
  it('should return a JSON object with property "now"', () => {
    request.get('http://localhost:4000')
      .then((res) => {
        assert.strictEqual(res.body.message, 'Database connected');
      })
      .catch((err) => {
        throw new AssertionError({ message: err });
      });
  });
});
