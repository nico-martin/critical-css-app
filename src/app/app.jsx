import { render, h, Fragment } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { Router } from 'preact-router';
import { Link } from 'preact-router/match';

import Onboarding from './Onboarding/Onboadring.jsx';
import Example from '@theme/example.jsx';

const App = () => {
  const [loading: boolean, setLoading] = useState(true);
  const [userID: number, setUserID] = useState(0);

  if (userID === 0) {
    return (
      <Fragment>
        {false && <Onboarding />}
        <Example />
      </Fragment>
    );
  }

  if (loading) {
    return;
  }
  return <p>test</p>;
};

render(<App />, document.querySelector('#app'));
