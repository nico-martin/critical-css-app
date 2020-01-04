// @flow

import { h } from 'preact';
import cn from 'classnames';
import { ButtonGroup } from '@theme';

type Props = {
  className?: string,
  childen?: any,
};

const FormControls = (props: Props) => {
  return (
    <ButtonGroup className={cn('mt-4', props.className)}>
      {props.children}
    </ButtonGroup>
  );
};

export default FormControls;
