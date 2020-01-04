// @flow

import { h } from 'preact';
import cn from 'classnames';

const FormSuccess = ({
  className = '',
  children,
}: {
  className?: string,
  children: any,
}) => {
  return (
    <div
      className={cn(
        'bg-green-100 mt-4 border border-green-400 text-green-700 px-3 py-2 rounded relative',
        className
      )}
      role="alert"
    >
      <span className="block sm:inline text-sm">{children}</span>
    </div>
  );
};

export default FormSuccess;
