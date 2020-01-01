import { render, h, Fragment } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { Router } from 'preact-router';
import { Link } from 'preact-router/match';
import idb from '@store/storeIDB';
import axios from 'axios';
import { apiBase } from '@vendor/config';
import Onboarding from '@app/Onboarding/Onboadring.jsx';

console.log(process.env);

const App = () => {
  const [loading: boolean, setLoading] = useState(true);
  const [userID: number, setUserID] = useState(0);

  useEffect(async () => {
    const jwt = await idb.get('jwt');
    if (!jwt) {
      setLoading(false);
    } else {
      axios.defaults.headers.common = { Authorization: 'Bearer ' + jwt };
      axios
        .get(`${apiBase}user/me/`)
        .then(resp => console.log(resp))
        .catch(error => console.log(error));
    }
  }, []);

  if (loading) {
    return;
  }

  if (userID === 0) {
    return <Onboarding />;
  }

  return <p>test</p>;
};

render(<App />, document.querySelector('#app'));
