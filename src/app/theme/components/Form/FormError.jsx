// @flow

import { render, h } from 'preact';
import cn from 'classnames';

type Props = {
  className?: string,
  childen?: any,
};

const FormError = (props: Props) => {
  return (
    <p className={cn('form__feedback-error', props.className)}>
      {props.children}
    </p>
  );
};

export default FormError;
