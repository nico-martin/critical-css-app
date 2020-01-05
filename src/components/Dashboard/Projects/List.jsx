// @flow

import { h } from 'preact';
import type { Project } from '@vendor/types';
import cn from 'classnames';
import { useState } from 'preact/hooks';
import { Icon } from '@theme/index';
import { Link } from 'preact-router/match';
import ProjectsTokenInput from '@app/Dashboard/Projects/TokenInput.jsx';

const ProjectsList = ({
  project,
  heading = false,
}: {
  project: Project,
  heading?: boolean,
}) => (
  <div className="flex w-full border-gray-300 border-t py-4 items-center text-sm hover:bg-gray-100">
    <p className="w-4/12 pl-4">{project.url}</p>
    <p className="w-5/12">
      <ProjectsTokenInput token={project.key} />
      {
        // todo: add regenerate option
      }
    </p>
    <p className="w-2/12 text-right">{project.requests.length}</p>
    <Link
      className="w-1/12 text-right text-base pr-4"
      href={`/project/${project.id}`}
    >
      <Icon icon="mdi/arrow-right" />
    </Link>
  </div>
);

export default ProjectsList;
