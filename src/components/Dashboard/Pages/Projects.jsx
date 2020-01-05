// @flow

import { h } from 'preact';
import { useIntl } from 'react-intl';

import Page from './Page.jsx';
import { useState, useEffect } from 'preact/hooks';
import { connect } from 'unistore/preact';
import { storeUserActions } from '@store/index';
import type { Project } from '@vendor/types';

import ProjectsList from '@app/Dashboard/Projects/List.jsx';

const Projects = ({
  projects,
  fetchProjects,
}: {
  projects: Array<Project>,
  fetchProjects: Function,
}) => {
  const { formatMessage } = useIntl();

  useEffect(() => {
    fetchProjects();
  }, []);

  if (projects === false) {
    return <Page title={formatMessage({ id: 'navigation.projects' })} />;
  }

  return (
    <Page title={formatMessage({ id: 'navigation.projects' })}>
      <div className="flex w-full font-bold pb-4">
        <p className="w-4/12">{formatMessage({ id: 'project.url' })}</p>
        <p className="w-5/12">{formatMessage({ id: 'project.token' })}</p>
        <p className="w-2/12 text-right">
          {formatMessage({ id: 'project.requests' })}
        </p>
        <div className="w-1/12" />
      </div>
      {projects.length === 0 && <p>{formatMessage({ id: 'projects.none' })}</p>}
      {projects.map(project => (
        <ProjectsList project={project} />
      ))}
    </Page>
  );
};

export default connect('projects', storeUserActions)(Projects);
