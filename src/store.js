import { createStore, compose, applyMiddleware } from 'redux';
import { router5Middleware } from 'redux-router5';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(router, initialState) {
  const createStoreWithMiddleware = compose(
    applyMiddleware(router5Middleware(router), sagaMiddleware),
    window.devToolsExtension && process.env.NODE_ENV !== 'production' ? window.devToolsExtension() : (f) => f,
  )(createStore);

  const store = createStoreWithMiddleware(rootReducer, initialState);

  sagaMiddleware.run(rootSaga);

  // see: https://stackoverflow.com/questions/34243684/make-redux-reducers-and-other-non-components-hot-loadable
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
