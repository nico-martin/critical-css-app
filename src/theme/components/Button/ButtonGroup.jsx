// @flow

import { h } from 'preact';
import cn from 'classnames';

type Props = {
  className?: string,
  children?: any,
};

const ButtonGroup = (props: Props) => {
  return (
    <div className={cn('flex items-center justify-between', props.className)}>
      {props.children}
    </div>
  );
};

ButtonGroup.defaultProps = {
  className: '',
  children: '',
};

export default ButtonGroup;
