// @flow

import { h } from 'preact';
import Page from './Page.jsx';
import { useIntl } from 'react-intl';

const Privacy = () => {
  const { formatMessage } = useIntl();
  return (
    <Page title="Privacy">
      <p>
        This website does not collect any personal data besides what is either
        required to use the app or submitted explicitly. There are no tracking
        tools in use.
      </p>
      <h2 className="mt-4">Contact</h2>
      <p className="mt-2">Nico Martin</p>
      <p className="mt-2">
        Say Hello GmbH
        <br />
        Thunstrasse 4
        <br />
        3700 Spiez
      </p>
      <p className="mt-2">
        <a href="mailto:nico@sayhello.ch">nico@sayhello.ch</a>
      </p>
    </Page>
  );
};

export default Privacy;
