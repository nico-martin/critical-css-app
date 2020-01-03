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
  rows?: number,
  placeholder?: string,
  className?: string,
  classNameLabel?: string,
  classNameInput?: string,
  onKeyPress?: Function,
  inline?: boolean,
};

const Textarea = (props: Props) => {
  const [id] = useState(() => uniqueId(props.name));
  return (
    <ConnectForm>
      {({ register, errors }) => (
        <FormElement
          id={id}
          label={props.label}
          error={errors[props.name] ? errors[props.name].message : false}
          inline={props.inline}
          Field={
            <textarea
              className={cn(
                'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
                errors[name] ? 'border-red-500' : '',
                props.classNameInput
              )}
              name={props.name}
              id={id}
              ref={register(props.register)}
              placeholder={props.placeholder}
              rows={props.rows}
              onKeyPress={e => props.onKeyPress(e)}
            />
          }
        />
      )}
    </ConnectForm>
  );
};

Textarea.defaultProps = {
  register: {},
  rows: 4,
  placeholder: '',
  className: '',
  classNameLabel: '',
  classNameInput: '',
  inline: false,
};

export default Textarea;
