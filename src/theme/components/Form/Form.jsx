// @flow

import { h } from 'preact';
import cn from 'classnames';
import { useForm, useFormContext, FormContext } from 'react-hook-form';

type Props = {
  onSubmit: Function,
  defaultValues?: Object,
  className?: string,
  childen?: any,
};

const Form = ({
  onSubmit,
  className = '',
  children,
  defaultValues = {},
  ...rest
}: Props) => {
  const methods = useForm({ defaultValues });
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
