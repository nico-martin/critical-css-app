// @flow

import { h } from 'preact';
import Page from './Page.jsx';
import { useIntl } from 'react-intl';
import { connect } from 'unistore/preact';
import { storeUserActions } from '@store/index';
import type { Project } from '@vendor/types';
import { useState, useEffect } from 'preact/hooks';
import FourOFour from '@app/Dashboard/Pages/FourOFour.jsx';
import { Button } from '@theme';
import ProjectsSingleModal from '@app/Dashboard/Projects/SingleModal.jsx';
import ProjectsTokenInput from '@app/Dashboard/Projects/TokenInput.jsx';
import Requests from '@app/Dashboard/Requests/Requests.jsx';

const ProjectSingle = ({
  id,
  projects,
  fetchProjects,
}: {
  id: string,
  projects: Array<Project>,
  fetchProjects: Function,
}) => {
  const [project, setProject] = useState(null);
  const [requestModal, setRequestModal] = useState(false);
  const { formatMessage } = useIntl();
  id = parseInt(id);

  useEffect(() => fetchProjects(), []);

  if (projects === false) {
    return;
  }

  useEffect(() => {
    const projectsFiltered = projects.filter(project =>
      project.ID === id ? project : false
    );
    if (projectsFiltered.length) {
      setProject(projectsFiltered[0]);
    } else {
      setProject(false);
    }
  }, [id, projects]);

  if (project === null) {
    return;
  }

  if (project === false) {
    return <FourOFour />;
  }

  return (
    <Page
      title={formatMessage({ id: 'navigation.projects' })}
      controls={
        <Button
          text={formatMessage({ id: 'project.request.create' })}
          style="secondary"
          onClick={() => setRequestModal(true)}
        />
      }
    >
      <div className="flex w-full items-center">
        <p className="w-4/12 font-bold">
          {formatMessage({ id: 'project.url' })}
        </p>
        <p className="w-8/12 pr-2">{project.url}</p>
      </div>
      <div className="flex w-full items-center mt-4">
        <p className="w-4/12 font-bold">
          {formatMessage({ id: 'project.token' })}
        </p>
        <p className="w-8/12 pr-2">
          <ProjectsTokenInput token={project.key} />
        </p>
      </div>
      <Requests className="mt-4" requests={project.requests} />
      {requestModal && (
        <ProjectsSingleModal
          project={project}
          onClose={() => setRequestModal(false)}
        />
      )}
    </Page>
  );
};

export default connect('projects', storeUserActions)(ProjectSingle);
