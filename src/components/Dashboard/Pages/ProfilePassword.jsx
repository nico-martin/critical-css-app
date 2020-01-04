// @flow

import { h } from 'preact';
import { useState } from 'preact/hooks';
import { useIntl } from 'react-intl';
import { connect } from 'unistore/preact';
import {
  Button,
  Form,
  FormControls,
  FormError,
  FormSuccess,
  InputText,
} from '@theme';
import type { User } from '@vendor/types';
import axios from 'axios';
import { apiBase } from '@vendor/config';
import { storeUserActions } from '@store/index';

const ProfilePassword = ({
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
      onSubmit={data => {
        setError('');
        setSuccess('');
        if (data.password !== data.confirm) {
          setError(formatMessage({ id: 'user.password.change.missmatch' }));
          return;
        }
        setFormProcessing(true);
        axios
          .put(`${apiBase}user/password/${user.id}/`, {
            password: data.password,
          })
          .then(resp => {
            setFormProcessing(false);
            setSuccess(formatMessage({ id: 'user.password.change.success' }));
            fetchMe();
          })
          .catch(err => {
            setError(formatMessage({ id: 'user.password.change.failed' }));
            setFormProcessing(false);
          });
      }}
    >
      <h2 className="mb-8">{formatMessage({ id: 'user.password.change' })}</h2>
      <InputText
        name="password"
        label={formatMessage({ id: 'user.password.new' })}
        register={{
          required: formatMessage({ id: 'form.required' }),
        }}
        type="password"
        inline
      />
      <InputText
        name="confirm"
        label={formatMessage({ id: 'user.password.confirm' })}
        register={{
          required: formatMessage({ id: 'form.required' }),
        }}
        type="password"
        inline
      />
      {error !== '' && <FormError>{error}</FormError>}
      {success !== '' && <FormSuccess>{success}</FormSuccess>}
      <FormControls>
        <Button
          text={formatMessage({ id: 'user.password.change' })}
          type="submit"
          loading={formProcessing}
          style="primary"
        />
      </FormControls>
    </Form>
  );
};

export default connect('user', storeUserActions)(ProfilePassword);
