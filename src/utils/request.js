import _request from 'axios';

_request.interceptors.request.use((config) => {
  if (process.env.NODE_ENV !== 'production') {
    console.info('Requesting:', config.url); // eslint-disable-line no-console
  }
  return config;
});

export const requestInstance = _request;

function createAndThrowError(err) {
  const error = new Error(`: ${err.status} ${err.statusText}`);
  error.data = err;
  throw error;
}

export default function request(method, url, options = {}) {
  return _request(Object.assign({}, {
    method,
    url,
  }, options))
  .then((response) => response)
  .catch(createAndThrowError);
}
