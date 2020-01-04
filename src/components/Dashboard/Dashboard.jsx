// @flow

import { h } from 'preact';
import { useIntl } from 'react-intl';
import { Router } from 'preact-router';
import Navigation from './Navigation.jsx';
import Notifications from './Notifications.jsx';
import PagesProfile from './Pages/Profile.jsx';
import ProjectsAdd from './Pages/ProjectsAdd.jsx';

const Dashboard = () => {
  const { formatMessage } = useIntl();

  return (
    <div className="w-full max-w-4xl">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <Navigation />
        <Notifications />
        <Router>
          <div className="app__content" path="/">
            Page /
          </div>
          <ProjectsAdd path="/add/" />
          <PagesProfile path="/profile" />
        </Router>
      </div>
      <p className="text-center text-gray-500 text-xs m-auto max-w-2xl">
        {formatMessage(
          { id: 'footer.about' },
          {
            sayhello: (
              <a href="https://sayhello.ch" target="_blank">
                Say Hello GmbH
              </a>
            ),
          }
        )}
      </p>
    </div>
  );
};

export default Dashboard;