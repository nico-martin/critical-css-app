// @flow

import { h } from 'preact';
import { useState } from 'preact/hooks';
import { useIntl } from 'react-intl';
import { Link } from 'preact-router/match';
import { navigation } from '@vendor/config';
import { connect } from 'unistore/preact';
import type { User } from '@vendor/types';
import { Icon } from '@theme';
import idb from '@store/storeIDB';
import axios from 'axios';
import { storeUserActions } from '@store/index';

const Navigation = ({
  user,
  setFalseUser,
}: {
  user: User,
  setFalseUser: Function,
}) => {
  const { formatMessage } = useIntl();
  const [userMenu, setUserMenu] = useState(false);
  const logout = () => {
    idb.set('jwt', '');
    axios.defaults.headers.common = {
      Authorization: '',
    };
    setFalseUser();
  };

  return (
    <div className="border-gray-300 border-b flex">
      {Object.keys(navigation).map(id => (
        <Link
          className="text-blue-500 hover:text-blue-800 cursor-pointer py-2 px-4"
          activeClassName="active"
          href={navigation[id]}
        >
          {formatMessage({ id: 'navigation.' + id })}
        </Link>
      ))}
      <div className="relative ml-auto">
        <button
          className="text-blue-500 hover:text-blue-800 cursor-pointer py-2 px-4"
          onClick={() => setUserMenu(!userMenu)}
        >
          {user.firstname} {user.lastname}{' '}
          <Icon icon="arrow" rotate={userMenu ? 180 : 0} />
        </button>
        {userMenu && (
          <div className="bg-white nunito rounded shadow-md mt-2 absolute mt-12 top-0 right-0 min-w-full overflow-auto z-30">
            <ul className="list-reset">
              <li>
                <Link
                  href="/profile"
                  className="px-4 py-2 block text-gray-900 hover:bg-blue-400 hover:text-white no-underline hover:no-underline"
                >
                  {formatMessage({ id: 'navigation.user.profile' })}
                </Link>
              </li>
              <li>
                <hr className="border-t mx-2 border-gray-300" />
              </li>
              <li>
                <button
                  onClick={() => logout()}
                  className="px-4 py-2 block w-full text-left text-gray-900 hover:bg-blue-400 hover:text-white no-underline hover:no-underline"
                >
                  {formatMessage({ id: 'navigation.user.logout' })}
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default connect('user', storeUserActions)(Navigation);
