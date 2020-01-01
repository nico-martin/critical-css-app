// @flow

import { render, h } from 'preact';
import cn from 'classnames';

type Props = {
  className?: string,
  legend?: string,
  childen?: any,
};

const FormFieldset = (props: Props) => {
  return (
    <div className={cn({ 'mt-4': props.legend }, props.className)}>
      {props.legend !== '' && <h2>{props.legend}</h2>}
      {props.children}
    </div>
  );
};

FormFieldset.defaultProps = {
  legend: '',
};

export default FormFieldset;
