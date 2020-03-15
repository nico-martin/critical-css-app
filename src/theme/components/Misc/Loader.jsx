// @flow

import { h } from 'preact';
import cn from 'classnames';
import './Loader.css';

const Loader = ({ className = '', ...rest }: { className?: string }) => (
  <div className={cn('loader', className)} {...rest} />
);

export default Loader;
