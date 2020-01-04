// @flow

import { h } from 'preact';
import { useState } from 'preact/hooks';
import cn from 'classnames';
import { ConnectForm } from './ConnectForm.jsx';
import { uniqueId } from '@vendor/helpers.js';
import { FormElement } from '@theme';
import './InputTrueFalse.css';
type Props = {
  name: string,
  description: string,
  label: string,
  register: Object,
  className?: string,
  classNameLabel?: string,
  classNameInput?: string,
  inline?: boolean,
};

const InputTrueFalse = (props: Props) => {
  const [id] = useState(() => uniqueId(props.name));
  return (
    <ConnectForm>
      {({ register, errors }) => (
        <FormElement
          id={id}
          label={props.label}
          doNotLabel
          Field={
            <span
              className={cn('w-full input-true-false', props.classNameInput)}
            >
              <input
                name={props.name}
                id={id}
                ref={register(props.register)}
                placeholder={props.placeholder}
                type="checkbox"
                disabled={props.disabled}
              />
              <label htmlFor={id}>{props.description}</label>
            </span>
          }
          error={errors[props.name] ? errors[props.name].message : false}
          inline={props.inline}
        />
      )}
    </ConnectForm>
  );
};

InputTrueFalse.defaultProps = {
  register: {},
  type: 'text',
  placeholder: '',
  className: '',
  classNameLabel: '',
  classNameInput: '',
  inline: false,
};

export default InputTrueFalse;
