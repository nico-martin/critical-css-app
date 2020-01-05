// @flow

import { h } from 'preact';
import { useIntl } from 'react-intl';
import ProfileEdit from '@app/Dashboard/Profile/Edit.jsx';
import ProfilePassword from '@app/Dashboard/Profile/Password.jsx';

import Page from './Page.jsx';

const Profile = () => {
  const { formatMessage } = useIntl();

  return (
    <Page title={formatMessage({ id: 'navigation.user.profile' })}>
      <ProfileEdit />
      <ProfilePassword className="border-gray-300 border-t pt-8 mt-8" />
    </Page>
  );
};

export default Profile;
