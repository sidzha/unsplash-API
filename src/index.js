// React staff
import React from 'react';
import { render } from 'react-dom';
// Redux staff
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducer';
import { Provider } from 'react-redux';
// Other staff
import App from './containers/app.js';
import './style.css';

import Unsplash, { toJson } from 'unsplash-js';

const unsplash = new Unsplash({
  accessKey: 'c9e8f872c1312cc842bbb43b38b2d941a16b9f70429b62eae55e373220c3cdbd',
  secret: 'c6c34444a4e1ba2cff370ba0220d0e4ac85a7577a731a4a792698fb1663376d8',
  callbackUrl: 'http://localhost:8080'
});

const code = location.search.split('code=')[1];

if (code) {
  console.log(code);
  unsplash.auth
    .userAuthentication(code)
    .then(toJson)
    .then(json => {
      unsplash.auth.setBearerToken(json.access_token);
    });
} else {
  const authenticationUrl = unsplash.auth.getAuthenticationUrl([
    'public',
    'read_user'
  ]);
  location.assign(authenticationUrl);
}

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunk.withExtraArgument({
      unsplash,
      toJson
    })
  )
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
