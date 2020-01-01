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
  type?: 'text' | 'email' | 'tel',
  value?: string,
  placeholder?: string,
  className?: string,
  classNameLabel?: string,
  classNameInput?: string,
  inline?: boolean,
};

const Text = (props: Props) => {
  const [id] = useState(() => uniqueId(props.name));
  const [name] = useState(() => uniqueId(props.name, 'form'));
  return (
    <ConnectForm>
      {({ register, errors }) => (
        <FormElement
          id={id}
          label={props.label}
          Field={
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
          }
          error={errors[name] ? errors[name].message : false}
          inline={props.inline}
        />
      )}
    </ConnectForm>
  );
};

Text.defaultProps = {
  register: {},
  type: 'text',
  value: '',
  placeholder: '',
  className: '',
  classNameLabel: '',
  classNameInput: '',
  inline: false,
};

export default Text;
