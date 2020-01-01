// @flow

import { render, h, Fragment } from 'preact';
import { useState, useEffect } from 'preact/hooks';
//import { Router } from 'preact-router';
//import { Link } from 'preact-router/match';
import idb from '@store/storeIDB';
import axios from 'axios';
import Onboarding from '@app/Onboarding/Onboadring.jsx';
import { Provider, connect } from 'unistore/preact';
import { store, storeUserActions } from '@store';

const App = connect(
  'user',
  storeUserActions
)(({ user, fetchMe, setFalseUser }) => {
  useEffect(async () => {
    const jwt = await idb.get('jwt');
    if (!jwt) {
      setFalseUser();
    } else {
      axios.defaults.headers.common = {
        Authorization: 'Bearer ' + jwt,
      };
      fetchMe();
    }
  }, []);

  if (user === false) {
    return <Onboarding />;
  }

  if (Object.keys(user).length === 0) {
    return;
  }

  return (
    <p>
      Logged In as {user.email} {user.firstname}
    </p>
  );
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
);
