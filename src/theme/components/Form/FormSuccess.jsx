// @flow

import { h } from 'preact';
import { Notification } from '@theme';

const FormSuccess = ({ children, ...rest }: { children: any }) => {
  return (
    <Notification type="success" {...rest}>
      {children}
    </Notification>
  );
};

export default FormSuccess;
