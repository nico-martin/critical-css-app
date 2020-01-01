// @flow

import { render, h } from 'preact';
import cn from 'classnames';

type Props = {
  className?: string,
  childen?: any,
};

const FormError = (props: Props) => {
  return (
    <div
      className={cn(
        'bg-red-100 mt-4 border border-red-400 text-red-700 px-3 py-2 rounded relative',
        props.className
      )}
      role="alert"
    >
      <span className="block sm:inline text-sm">{props.children}</span>
    </div>
  );
};

export default FormError;
