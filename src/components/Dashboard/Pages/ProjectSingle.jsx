// @flow

import { h } from 'preact';
import Page from './Page.jsx';
import { useIntl } from 'react-intl';
import { connect } from 'unistore/preact';
import { storeUserActions } from '@store/index';
import type { Project } from '@vendor/types';

const ProjectSingle = ({
  id,
  projects,
}: {
  id: string,
  projects: Array<Project>,
}) => {
  const { formatMessage } = useIntl();
  id = parseInt(id);

  return (
    <Page title={formatMessage({ id: 'navigation.projects' })}>
      <p>Test - {id}</p>
    </Page>
  );
};

export default connect('projects', storeUserActions)(ProjectSingle);
