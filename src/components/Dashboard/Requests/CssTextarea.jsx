// @flow

import { h } from 'preact';
import cn from 'classnames';

const RequestsCssTextarea = ({
  content,
  className = '',
}: {
  content: string,
  className?: string,
}) => (
  <textarea
    className={cn(
      'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:shadow-outline',
      className
    )}
    rows="8"
    disabled={true}
  >
    {content}
  </textarea>
);

export default RequestsCssTextarea;
