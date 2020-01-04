// @flow

import { h } from 'preact';
import cn from 'classnames';

const FormError = ({
  className = '',
  children,
}: {
  className?: string,
  children: any,
}) => {
  return (
    <div
      className={cn(
        'bg-red-100 mt-4 border border-red-400 text-red-700 px-3 py-2 rounded relative',
        className
      )}
      role="alert"
    >
      <span className="block sm:inline text-sm">{children}</span>
    </div>
  );
};

export default FormError;
