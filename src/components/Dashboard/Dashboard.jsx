// @flow

import { h } from 'preact';
import { useIntl } from 'react-intl';
import { Router } from 'preact-router';
import { Link } from 'preact-router/match';
import Navigation from './Navigation.jsx';
import Notifications from './Notifications.jsx';
import PagesProfile from './Pages/Profile.jsx';
import ProjectsAdd from './Pages/ProjectsAdd.jsx';
import Projects from './Pages/Projects.jsx';
import ProjectSingle from './Pages/ProjectSingle.jsx';
import FourOFour from './Pages/FourOFour.jsx';
import Legal from './Pages/Legal.jsx';
import Privacy from './Pages/Privacy.jsx';

const Dashboard = () => {
  const { formatMessage } = useIntl();

  return (
    <div className="w-full max-w-4xl">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <Navigation />
        <Notifications />
        <Router>
          <Projects path="/" />
          <Projects path="/project" />
          <ProjectSingle path="/project/:id" />
          <ProjectsAdd path="/add/" />
          <PagesProfile path="/profile" />
          <Privacy path="/privacy" />
          <Legal path="/legal" />
          <FourOFour default />
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
        )}{' '}
        - <Link href="/legal">{formatMessage({ id: 'navigation.legal' })}</Link>{' '}
        -{' '}
        <Link href="/privacy">
          {formatMessage({ id: 'navigation.privacy' })}
        </Link>
      </p>
    </div>
  );
};

export default Dashboard;
