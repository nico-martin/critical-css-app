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
        'bg-red-100 mt-4 border border-red-400 text-red-700 px-4 py-3 rounded relative',
        props.className
      )}
      role="alert"
    >
      <span className="block sm:inline">{props.children}</span>
    </div>
  );
};

export default FormError;
