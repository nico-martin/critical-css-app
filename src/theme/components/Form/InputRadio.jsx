// @flow

import React from 'react';
import cn from 'classnames';
import { ConnectForm } from './ConnectForm.jsx';
import { uniqueId } from '@vendor/helpers.js';

type Props = {
  name: string,
  label: string,
  register: Object,
  elements: Object,
  large?: boolean,
  className?: string,
  classNameLabel?: string,
  classNameInput?: string,
};

const Radio = (props: Props) => {
  const [name] = React.useState(() => uniqueId(props.name, 'form'));
  return (
    <ConnectForm>
      {({ register, errors }) => (
        <div
          className={cn(
            'form__element',
            props.large ? 'form__element--large' : '',
            props.className
          )}
        >
          <p className={cn('form__label', props.classNameLabel)}>
            {props.label}
          </p>
          {Object.entries(props.elements).map(([key, text]) => {
            const [id] = React.useState(() => uniqueId(props.name + '-' + key));
            return (
              <div className="form__radio-element" key={id}>
                <input
                  className={cn('form__radio', props.classNameInput)}
                  name={name}
                  value={key}
                  ref={register(props.register)}
                  type="radio"
                  id={id}
                />
                <label htmlFor={id} className="">
                  {text}
                </label>
              </div>
            );
          })}
          {errors[props.name] && (
            <span className={cn('form__error')}>
              {errors[props.name].message}
            </span>
          )}
        </div>
      )}
    </ConnectForm>
  );
};

Radio.defaultProps = {
  register: {},
  large: false,
  elements: {},
  className: '',
  classNameLabel: '',
  classNameInput: '',
};

export default Radio;
