import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider } from 'react-router5';
import { Provider } from 'react-redux';
import createStore from './store';
import createRouter from './router';
import App from './containers/App';

/**
 * Fire-up Router5.
 */
const reactRoot = window.document.getElementById('app');
const router = createRouter();
const store = createStore(router);

/**
 * Fire-up Router5.
 */
router.start(() => {
  ReactDOM.render(
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>,
    reactRoot
  );
});
