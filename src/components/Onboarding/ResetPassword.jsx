// @flow

import { h } from 'preact';
import { useState } from 'preact/hooks';
import {
  Button,
  Form,
  FormControls,
  FormError,
  FormSuccess,
  InputText,
} from '@theme';
import axios from 'axios';
import { apiBase } from '@vendor/config';
import { useIntl } from 'react-intl';

const PasswordReset = ({ setSignIn }: { setSignIn: Function }) => {
  const [formProcessing: boolean, setFormProcessing] = useState(false);
  const [error: string, setError] = useState('');
  const [success: string, setSuccess] = useState('');
  const { formatMessage } = useIntl();

  return (
    <Form
      onSubmit={data => {
        console.log('data', data);
        setError('');
        setSuccess('');
        setFormProcessing(true);
        axios
          .post(`${apiBase}user/reset-password/`, {
            email: data.email,
          })
          .then(resp => {
            if (resp.data.updated) {
              setSuccess(formatMessage({ id: 'onboarding.resetpw.success' }));
            } else {
              setError(formatMessage({ id: 'onboarding.resetpw.failed' }));
            }
            setFormProcessing(false);
          })
          .catch(err => {
            setError(formatMessage({ id: 'onboarding.resetpw.failed' }));
            setFormProcessing(false);
          });
      }}
    >
      <InputText
        name="email"
        label={formatMessage({ id: 'onboarding.credentials.email' })}
        register={{
          required: formatMessage({ id: 'form.required' }),
          pattern: {
            value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: formatMessage({ id: 'form.required.email' }),
          },
        }}
        type="email"
      />
      <p className="text-sm">
        {formatMessage({ id: 'onboarding.resetpw.desc' })}
      </p>
      {error !== '' && <FormError>{error}</FormError>}
      {success !== '' && <FormSuccess>{success}</FormSuccess>}
      <FormControls>
        <Button
          text={formatMessage({ id: 'onboarding.resetpw' })}
          type="submit"
          loading={formProcessing}
          style="primary"
        />
        <Button
          text={formatMessage({ id: 'onboarding.signin' })}
          style="nobutton"
          type="Button"
          onClick={() => setSignIn()}
          small
        />
      </FormControls>
    </Form>
  );
};

export default PasswordReset;
