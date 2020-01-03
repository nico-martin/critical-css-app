// @flow

import { render, h } from 'preact';
import cn from 'classnames';

type Props = {
  className?: string,
  childen?: any,
};

const FormSuccess = (props: Props) => {
  return (
    <div
      className={cn(
        'bg-green-100 mt-4 border border-green-400 text-green-700 px-3 py-2 rounded relative',
        props.className
      )}
      role="alert"
    >
      <span className="block sm:inline text-sm">{props.children}</span>
    </div>
  );
};

export default FormSuccess;
