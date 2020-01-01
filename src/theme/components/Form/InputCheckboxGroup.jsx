// @flow

import { render, h } from 'preact';
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
            const [name] = React.useState(() =>
              uniqueId(props.name + '-' + key, 'form')
            );
            return (
              <div className="form__checkbox-element" key={id}>
                <input
                  className={cn('form__checkbox', props.classNameInput)}
                  name={`${name}[${key}]`}
                  value={true}
                  ref={register(props.register)}
                  type="checkbox"
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
