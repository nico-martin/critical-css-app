// @flow

import { h } from 'preact';
import { useState } from 'preact/hooks';
import { useIntl } from 'react-intl';
import { connect } from 'unistore/preact';
import { Button, Form, FormControls, FormError, InputText } from '@theme';
import type { User } from '@vendor/types';

const ProfilePassword = ({
  user,
  className = '',
}: {
  user: User,
  className: string,
}) => {
  const [formProcessing: boolean, setFormProcessing] = useState(false);
  const [error: string, setError] = useState('');
  const { formatMessage } = useIntl();

  return (
    <Form
      className={className}
      onSubmit={data => {
        console.log(data);
        /*
          setError('');
          setFormProcessing(true);
          axios
            .post(`${apiBase}user/signin/`, {
              email: data.email,
              password: data.password,
              remember: data.remember,
            })
            .then(resp => {
              data.remember && idb.set('jwt', resp.data.token);
              axios.defaults.headers.common = {
                Authorization: 'Bearer ' + resp.data.token,
              };
              fetchMe();
            })
            .catch(err => {
              setError(formatMessage({ id: 'onboarding.credentials.invalid' }));
              setFormProcessing(false);
            });
           */
      }}
    >
      <h2 className="mb-8">{formatMessage({ id: 'user.password.change' })}</h2>
      <InputText
        name="oldpassword"
        label={formatMessage({ id: 'user.password.old' })}
        register={{
          required: formatMessage({ id: 'form.required' }),
        }}
        type="password"
        inline
      />
      <InputText
        name="newpassword"
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

export default connect('user')(ProfilePassword);
