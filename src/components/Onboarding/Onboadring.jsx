// @flow

import React from 'react';
import { render, h } from 'preact';
import {
  Button,
  Form,
  FormFieldset,
  FormControls,
  FormError,
  InputText,
  InputTextarea,
  InputSelect,
} from '@theme';
import cn from 'classnames';
import axios from 'axios';
import idb from '@store/storeIDB';
import { useState } from 'preact/hooks';
import { apiBase } from '@vendor/config';
import { connect } from 'unistore/preact';
import { storeUserActions } from '@store/index';
import { useIntl } from 'react-intl';

const onboarding = connect(
  'user',
  storeUserActions
)(({ fetchMe }) => {
  const [formProcessing: boolean, setFormProcessing] = useState(false);
  const [error: string, setError] = useState('');
  const { formatMessage } = useIntl();

  return (
    <div className="w-full max-w-xs">
      <Form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={data => {
          setError('');
          setFormProcessing(true);
          axios
            .post(`${apiBase}user/signin/`, {
              email: data.email,
              password: data.password,
            })
            .then(resp => {
              idb.set('jwt', resp.data.token);
              axios.defaults.headers.common = {
                Authorization: 'Bearer ' + resp.data.token,
              };
              fetchMe();
            })
            .catch(err => {
              setError(formatMessage({ id: 'onboarding.credentials.invalid' }));
              setFormProcessing(false);
            });
        }}
      >
        <InputText
          name="email"
          label="Email"
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
          label="Password"
          register={{
            required: formatMessage({ id: 'form.required' }),
          }}
          type="password"
        />
        {error !== '' && <FormError>{error}</FormError>}
        <FormControls>
          <Button
            text={formatMessage({ id: 'onboarding.signin' })}
            type="submit"
            loading={formProcessing}
            style="primary"
          />
          <Button text="reset Password" style="nobutton" />
        </FormControls>
      </Form>
      <p className="text-center text-gray-500 text-xs">
        {formatMessage(
          { id: 'onboarding.join' },
          { email: <a href="mailto:nico@sayhello.ch">nico@sayhello.ch</a> }
        )}
      </p>
    </div>
  );
});

export default onboarding;
