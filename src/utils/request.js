import request from 'axios';

request.interceptors.request.use((config) => {
  if (process.env.NODE_ENV !== 'production') {
    console.info('Requesting:', config.url); // eslint-disable-line no-console
  }
  return config;
});

function createAndThrowError(err) {
  const error = new Error(`: ${err.status} ${err.statusText}`);
  error.data = err;
  throw error;
}

export default function requestMolmoApi(method, url, options = {}) {
  return request(Object.assign({}, {
    method,
    url,
  }, options))
  .then((response) => response)
  .catch(createAndThrowError);
}
