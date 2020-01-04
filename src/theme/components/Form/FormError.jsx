// @flow

import { h } from 'preact';
import { Notification } from '@theme';

const FormError = ({ children, ...rest }: { children: any }) => {
  return (
    <Notification type="error" {...rest}>
      {children}
    </Notification>
  );
};

export default FormError;
