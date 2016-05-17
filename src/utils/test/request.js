import test from 'blue-tape';
import MockAdapter from 'axios-mock-adapter';
import request, { requestInstance } from '../request';

// Mock axios requests
const mock = new MockAdapter(requestInstance);

const successResponse = {
  test: 'success',
};

const failResponse = {
  test: 'fail',
};

mock.onGet('/test/success').reply(200, successResponse);
mock.onGet('/test/fail').reply(500, failResponse);

test('Util: request', (_t) => {

  _t.test('request success', (t) => {
    return request('get', '/test/success', {}).then((res) => {
      t.deepEqual(res.data, successResponse, 'should be able to send a request successfully');
      return res;
    });
  });

  _t.test('request fail', (t) => {
    return request('get', '/test/fail', {}).then(() => {
      throw new Error('should have failed');
    }, (err) => {
      if (!(err instanceof Error)) {
        throw new Error('should have thrown an instance of ' + Error);
      }
      t.pass('should throw an error if request failed');
    });
  });
});
