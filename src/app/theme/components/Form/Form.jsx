// @flow

import { render, h } from 'preact';
import cn from 'classnames';
import { useForm, useFormContext, FormContext } from 'react-hook-form';

import './Form.css';

type Props = {
  onSubmit: Function,
  className?: string,
  childen?: any,
};

const Form = ({ onSubmit, className, children, ...rest }: Props) => {
  const methods = useForm();
  return (
    <FormContext {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className={cn(className, 'form')}
        {...rest}
      >
        {children}
      </form>
    </FormContext>
  );
};

export default Form;
