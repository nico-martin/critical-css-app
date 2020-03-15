// @flow

import { render, h } from 'preact';
import { useEffect } from 'preact/hooks';
import { IntlProvider } from 'react-intl';
import idb from '@store/storeIDB';
import axios from 'axios';
import { Provider, connect } from 'unistore/preact';
import { store, storeUserActions } from '@store';
import { Loader } from '@theme';
import Onboarding from '@app/Onboarding/Onboading.jsx';
import Dashboard from '@app/Dashboard/Dashboard.jsx';

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

  console.log(Object.keys(user));
  if (Object.keys(user).length === 0) {
    return <Loader className="text-3xl mt-8" />;
  }

  if (user === false) {
    return <Onboarding />;
  }

  return <Dashboard />;
});

const IntlApp = connect(['intlLocale', 'intlMessages'])(
  ({ intlLocale, intlMessages }) => (
    <IntlProvider locale={intlLocale} messages={intlMessages}>
      <App />
    </IntlProvider>
  )
);

render(
  <Provider store={store}>
    <IntlApp />
  </Provider>,
  document.querySelector('#app')
);
