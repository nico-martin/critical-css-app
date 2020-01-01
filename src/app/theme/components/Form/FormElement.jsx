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
    <Fragment>
      <div
        className={cn(props.className, 'mt-4', {
          flex: props.inline,
        })}
      >
        <label
          className={cn(
            'block text-gray-700 text-sm font-bold items-center py-2',
            {
              'mb-2': !props.inline,
              'w-1/4': props.inline,
            }
          )}
          htmlFor={props.id}
        >
          {props.label}
        </label>
        <div className={cn({ 'w-3/4': props.inline, 'pl-2': props.inline })}>
          {props.Field}
        </div>
      </div>
      {props.error !== '' && (
        <p className="text-red-500 text-xs italic text-right mt-1">
          {props.error}
        </p>
      )}
    </Fragment>
  );
};

FormElement.defaultProps = {
  label: '',
  error: '',
  inline: false,
  className: '',
};

export default FormElement;
