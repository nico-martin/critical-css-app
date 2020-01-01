// @flow

import { render, h } from 'preact';
import cn from 'classnames';

type Props = {
  className?: string,
  childen?: any,
};

const FormSuccess = (props: Props) => {
  return (
    <p className={cn('form__feedback-success', props.className)}>
      {props.children}
    </p>
  );
};

export default FormSuccess;
