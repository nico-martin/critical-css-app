// @flow

import { h } from 'preact';

const ProjectsTokenInput = ({ token, ...rest }: { token: string }) => (
  <input
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    disabled={true}
    value={token}
    {...rest}
  />
);

export default ProjectsTokenInput;
