// @flow

import React from 'react';
import cn from 'classnames';

import './Loader.scss';

type Props = {
  className?: string,
};

const Loader = (props: Props) => {
  return <div className={cn(props.className, 'loader')} />;
};

Loader.defaultProps = {
  className: '',
};

export default Loader;
