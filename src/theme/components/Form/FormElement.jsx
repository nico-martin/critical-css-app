// @flow

import { render, h, Fragment } from 'preact';
import cn from 'classnames';

type Props = {
  id: string,
  label?: string,
  Field: any,
  error?: string,
  inline?: boolean,
  className?: string,
};

const FormElement = (props: Props) => {
  return (
    <div className="mb-4">
      <div
        className={cn({
          'md:flex': props.inline,
        })}
      >
        <label
          className={cn(
            'block text-gray-700 text-sm font-bold items-center mb-2',
            {
              'md:mb-0': props.inline,
              'md:py-2': props.inline,
              'md:w-1/4': props.inline,
            }
          )}
          htmlFor={props.id}
        >
          {props.label}
        </label>
        <div
          className={cn({ 'md:w-3/4': props.inline, 'md:pl-2': props.inline })}
        >
          {props.Field}
        </div>
      </div>
      {props.error !== '' && (
        <p className="text-red-500 text-xs italic text-right mt-1">
          {props.error}
        </p>
      )}
    </div>
  );
};

FormElement.defaultProps = {
  label: '',
  error: '',
  inline: false,
  className: '',
};

export default FormElement;
