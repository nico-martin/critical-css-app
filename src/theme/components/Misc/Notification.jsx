// @flow

import { h } from 'preact';
import cn from 'classnames';

const Notification = ({
  className = '',
  children,
  type = 'message',
}: {
  className?: string,
  children: any,
  type?: 'message' | 'error' | 'success',
}) => (
  <div
    className={cn(
      'mt-4 border px-3 py-2 rounded relative',
      type === 'message' ? 'bg-blue-100 border-blue-400 text-blue-700' : '',
      type === 'success' ? 'bg-green-100 border-green-400 text-green-700' : '',
      type === 'error' ? 'bg-red-100 border-red-400 text-red-700' : '',
      className
    )}
    role="alert"
  >
    <span className="block sm:inline text-sm">{children}</span>
  </div>
);

export default Notification;
