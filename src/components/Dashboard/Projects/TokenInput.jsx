// @flow

import { h } from 'preact';

const ProjectsTokenInput = ({ token, ...rest }: { token: string }) => (
  <input
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    value={token}
    onKeyUp={e => (e.target.value = token)}
    {...rest}
  />
);

export default ProjectsTokenInput;
