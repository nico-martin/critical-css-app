// @flow

import { h } from 'preact';
import cn from 'classnames';

const RequestsCssTextarea = ({ className = '' }: { className?: string }) => (
  <textarea
    className={cn(
      'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
      className
    )}
    rows="8"
    disabled={true}
  >
    Could not be loaded
  </textarea>
);

export default RequestsCssTextarea;
