// @flow

import { h } from 'preact';
import cn from 'classnames';

import './Button.css';
import { Icon } from '@theme';

type Props = {
  text: string,
  className?: string,
  icon?: string,
  disabled?: boolean,
  loading?: boolean,
  style?: 'primary' | 'secondary' | 'nobutton',
  small?: boolean,
  large?: boolean,
};

const Button = ({
  text,
  className,
  icon,
  disabled,
  loading,
  style,
  large,
  small,
  ...rest
}: Props) => {
  return (
    <button
      className={cn(className, 'button', `button--${style}`, {
        'button--loading': loading,
        'button--large': large,
        'button--small': small,
      })}
      disabled={loading || disabled}
      {...rest}
    >
      {icon !== '' && <Icon icon={icon} className="button__icon" />}
      {text}
    </button>
  );
};

Button.defaultProps = {
  className: '',
  icon: '',
  disabled: false,
  loading: false,
  style: 'primary',
};

export default Button;
