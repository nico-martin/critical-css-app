// @flow

import { h } from 'preact';
import { useState } from 'preact/hooks';
import {
  Button,
  Form,
  FormControls,
  FormError,
  InputText,
  InputTrueFalse,
} from '@theme';
import axios from 'axios';
import { apiBase } from '@vendor/config';
import idb from '@store/storeIDB';
import { useIntl } from 'react-intl';
import { connect } from 'unistore/preact';
import { storeUserActions } from '@store/index';

const SignIn = ({
  setResetPw,
  fetchMe,
  fetchProjects,
}: {
  setResetPw: Function,
  fetchMe: Function,
  fetchProjects: Function,
}) => {
  const [formProcessing: boolean, setFormProcessing] = useState(false);
  const [error: string, setError] = useState('');
  const { formatMessage } = useIntl();

  return (
    <Form
      onSubmit={data => {
        setError('');
        setFormProcessing(true);
        axios
          .post(`${apiBase}user/signin/`, {
            email: data.email,
            password: data.password,
            remember: data.remember,
          })
          .then(resp => {
            if (data.remember) {
              idb.set('jwt', resp.data.token);
            }
            axios.defaults.headers.common = {
              Authorization: 'Bearer ' + resp.data.token,
            };
            fetchMe();
            fetchProjects();
          })
          .catch(err => {
            setError(formatMessage({ id: 'onboarding.credentials.invalid' }));
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
      <InputText
        name="password"
        label={formatMessage({ id: 'onboarding.credentials.password' })}
        register={{
          required: formatMessage({ id: 'form.required' }),
        }}
        type="password"
      />
      <InputTrueFalse
        name="remember"
        label=""
        description={formatMessage({
          id: 'onboarding.credentials.rememberme',
        })}
      />
      {error !== '' && <FormError>{error}</FormError>}
      <FormControls>
        <Button
          text={formatMessage({ id: 'onboarding.signin' })}
          type="submit"
          loading={formProcessing}
          style="primary"
        />
        <Button
          text={formatMessage({ id: 'onboarding.resetpw' })}
          style="nobutton"
          type="Button"
          onClick={() => setResetPw()}
          small
        />
      </FormControls>
    </Form>
  );
};

export default connect('user', storeUserActions)(SignIn);
