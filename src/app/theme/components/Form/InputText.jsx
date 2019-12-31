// @flow

import { render, h } from 'preact';
import { useState } from 'preact/hooks';
import cn from 'classnames';
import { ConnectForm } from './ConnectForm.jsx';
import { uniqueId } from '@vendor/helpers.js';

type Props = {
  name: string,
  label: string,
  register: Object,
  type?: 'text' | 'email' | 'tel',
  large?: boolean,
  value?: string,
  placeholder?: string,
  className?: string,
  classNameLabel?: string,
  classNameInput?: string,
};

const Text = (props: Props) => {
  const [id] = useState(() => uniqueId(props.name));
  const [name] = useState(() => uniqueId(props.name, 'form'));
  return (
    <ConnectForm>
      {({ register, errors }) => (
        <div className={cn(props.className, 'form__element')}>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor={id}
          >
            {props.label}
          </label>
          <input
            className={cn(
              'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
              errors[name] ? 'border-red-500' : '',
              props.classNameInput
            )}
            name={name}
            id={id}
            ref={register(props.register)}
            defaultValue={props.value}
            placeholder={props.placeholder}
            type={props.type}
            disabled={props.disabled}
          />
          {errors[name] && (
            <span className={cn('text-red-500 text-xs italic')}>
              {errors[name].message}
            </span>
          )}
        </div>
      )}
    </ConnectForm>
  );
};

Text.defaultProps = {
  register: {},
  type: 'text',
  large: false,
  value: '',
  placeholder: '',
  className: '',
  classNameLabel: '',
  classNameInput: '',
};

export default Text;
