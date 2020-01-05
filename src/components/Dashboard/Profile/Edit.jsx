// @flow

import { h } from 'preact';
import { useState } from 'preact/hooks';
import { useIntl } from 'react-intl';
import type { User } from '@vendor/types';
import { connect } from 'unistore/preact';
import {
  Button,
  Form,
  FormControls,
  FormError,
  FormSuccess,
  InputText,
} from '@theme';
import { apiBase } from '@vendor/config';
import axios from 'axios';
import { storeUserActions } from '@store/index';

const ProfileEdit = ({
  user,
  fetchMe,
  className = '',
}: {
  user: User,
  fetchMe: Function,
  className: string,
}) => {
  const [formProcessing: boolean, setFormProcessing] = useState(false);
  const [error: string, setError] = useState('');
  const [success: string, setSuccess] = useState('');
  const { formatMessage } = useIntl();

  return (
    <Form
      className={className}
      defaultValues={{
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
      }}
      onSubmit={data => {
        setError('');
        setSuccess('');
        setFormProcessing(true);
        axios
          .put(`${apiBase}user/${user.id}/`, {
            email: data.email,
            firstname: data.firstname,
            lastname: data.lastname,
          })
          .then(resp => {
            setFormProcessing(false);
            setSuccess(formatMessage({ id: 'user.profile.update.success' }));
            fetchMe();
          })
          .catch(err => {
            setError(formatMessage({ id: 'user.profile.update.failed' }));
            setFormProcessing(false);
          });
      }}
    >
      <InputText
        name="email"
        label={formatMessage({ id: 'user.email' })}
        register={{
          required: formatMessage({ id: 'form.required' }),
          pattern: {
            value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: formatMessage({ id: 'form.required.email' }),
          },
        }}
        type="email"
        inline
      />
      <InputText
        name="firstname"
        label={formatMessage({ id: 'user.firstname' })}
        register={{
          required: formatMessage({ id: 'form.required' }),
        }}
        inline
      />
      <InputText
        name="lastname"
        label={formatMessage({ id: 'user.lastname' })}
        register={{
          required: formatMessage({ id: 'form.required' }),
        }}
        inline
      />
      {error !== '' && <FormError>{error}</FormError>}
      {success !== '' && <FormSuccess>{success}</FormSuccess>}
      <FormControls>
        <Button
          text={formatMessage({ id: 'form.save' })}
          type="submit"
          loading={formProcessing}
          style="primary"
        />
      </FormControls>
    </Form>
  );
};

export default connect('user', storeUserActions)(ProfileEdit);
