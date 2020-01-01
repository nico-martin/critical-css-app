// @flow

import { render, h } from 'preact';
import { useState } from 'preact/hooks';
import cn from 'classnames';
import { ConnectForm } from './ConnectForm.jsx';
import { uniqueId } from '@vendor/helpers.js';
import { FormElement } from '@theme';

type Props = {
  name: string,
  label: string,
  register: Object,
  options: Object,
  value?: string,
  placeholder?: string,
  emptyOption?: boolean,
  className?: string,
  classNameLabel?: string,
  classNameInput?: string,
  inline?: boolean,
};

const Select = (props: Props) => {
  const [id] = useState(() => uniqueId(props.name));
  const [name] = useState(() => uniqueId(props.name, 'form'));
  return (
    <ConnectForm>
      {({ register, errors }) => (
        <FormElement
          id={id}
          label={props.label}
          error={errors[name] ? errors[name].message : false}
          inline={props.inline}
          Field={
            <span className="relative">
              <select
                className={cn(
                  'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
                  errors[name] ? 'border-red-500' : '',
                  props.classNameInput
                )}
                name={name}
                id={id}
                ref={register(props.register)}
                defaultValue={props.value}
              >
                {props.emptyOption && (
                  <option value="" disabled>
                    {props.placeholder}
                  </option>
                )}
                {Object.entries(props.options).map(([key, text]) => (
                  <option key={key} value={key}>
                    {text}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </span>
          }
        />
      )}
    </ConnectForm>
  );
};

Select.defaultProps = {
  register: {},
  emptyOption: false,
  value: '',
  placeholder: '',
  className: '',
  classNameLabel: '',
  classNameInput: '',
  inline: false,
};

export default Select;
