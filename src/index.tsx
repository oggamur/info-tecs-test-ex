import React from 'react';
import ReactDOM from 'react-dom/client';
import AppScreen from './components/app';
import { store } from './store/store';
import { fetchUsersAction } from './store/api-actions';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(fetchUsersAction());
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <AppScreen />
    </React.StrictMode>
  </Provider>
);
