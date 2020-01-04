// @flow

import { h } from 'preact';
import Page from './Page.jsx';
import { useIntl } from 'react-intl';

const FourOFour = () => {
  const { formatMessage } = useIntl();
  return (
    <Page title={formatMessage({ id: '404.title' })}>
      <p>{formatMessage({ id: '404.desc' })}</p>
    </Page>
  );
};

export default FourOFour;
