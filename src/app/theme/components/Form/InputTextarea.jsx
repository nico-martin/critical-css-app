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
  large?: boolean,
  rows?: number,
  value?: string,
  placeholder?: string,
  className?: string,
  classNameLabel?: string,
  classNameInput?: string,
  onKeyPress?: Function,
};

const Textarea = (props: Props) => {
  const [id] = useState(() => uniqueId(props.name));
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
          <textarea
            className={cn(
              'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
              errors[name] ? 'border-red-500' : '',
              props.classNameInput
            )}
            name={props.name}
            id={id}
            ref={register(props.register)}
            defaultValue={props.value}
            placeholder={props.placeholder}
            rows={props.rows}
            onKeyPress={e => props.onKeyPress(e)}
          />
          {errors[props.name] && (
            <span className={cn('text-red-500 text-xs italic')}>
              {errors[props.name].message}
            </span>
          )}
        </div>
      )}
    </ConnectForm>
  );
};

Textarea.defaultProps = {
  register: {},
  large: false,
  rows: 4,
  value: '',
  placeholder: '',
  className: '',
  classNameLabel: '',
  classNameInput: '',
};

export default Textarea;
