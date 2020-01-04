// @flow

import { h } from 'preact';
import cn from 'classnames';

type Props = {
  id: string,
  label?: string,
  doNotLabel?: boolean,
  Field: any,
  error?: string,
  inline?: boolean,
  className?: string,
};

const Label = ({
  label,
  children,
  className,
  id,
}: {
  label: boolean,
  children: any,
  className?: string,
  id: string,
}) => {
  return label ? (
    <label className={className} htmlFor={id}>
      {children}
    </label>
  ) : (
    <span className={className}>{children}</span>
  );
};

const FormElement = (props: Props) => {
  return (
    <div className="mb-4">
      <div
        className={cn({
          'md:flex': props.inline,
        })}
      >
        <Label
          className={cn(
            'block text-gray-700 text-sm font-bold items-center mb-2',
            {
              'md:mb-0': props.inline,
              'md:py-2': props.inline,
              'md:w-1/4': props.inline,
            }
          )}
          label={!props.doNotLabel}
          id={props.id}
        >
          {props.label}
        </Label>
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
  doNotLabel: false,
  error: '',
  inline: false,
  className: '',
};

export default FormElement;
