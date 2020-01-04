// @flow

import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { useIntl } from 'react-intl';
import { connect } from 'unistore/preact';
import type { User } from '@vendor/types';
import { Notification } from '@theme';
import { Link } from 'preact-router/match';

const Notifications = ({ user }: { user: User }) => {
  const [notifications: Object, setNotification] = useState({});
  const { formatMessage } = useIntl();

  useEffect(() => {
    if (user.passwordTemp) {
      setNotification({
        ...notifications,
        passwordTemp: (
          <p>
            {formatMessage(
              { id: 'notification.password' },
              { link: <Link href="/profile">Profile</Link> }
            )}
          </p>
        ),
      });
    } else {
      // todo: remove notification
    }
  }, [user]);

  if (Object.keys(notifications).length === 0) {
    return;
  }

  return (
    <div className="mt-2">
      {Object.values(notifications).map(content => (
        <Notification className="mt-2">{content}</Notification>
      ))}
    </div>
  );
};

export default connect('user')(Notifications);
