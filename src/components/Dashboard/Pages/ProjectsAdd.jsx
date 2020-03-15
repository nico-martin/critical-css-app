// @flow

import { h } from 'preact';
import { useIntl } from 'react-intl';

import Page from './Page.jsx';
import { useState } from 'preact/hooks';
import {
  Button,
  Form,
  FormControls,
  FormError,
  FormSuccess,
  InputText,
} from '@theme/index';
import axios from 'axios';
import { apiBase } from '@vendor/config';
import { connect } from 'unistore/preact';
import { storeUserActions } from '@store/index';
import type { User } from '@vendor/types';
import { route } from 'preact-router';

const ProjectsAdd = ({ user, fetchMe }: { user: User, fetchMe: Function }) => {
  const [formProcessing: boolean, setFormProcessing] = useState(false);
  const [error: string, setError] = useState('');
  const [success: string, setSuccess] = useState('');
  const { formatMessage } = useIntl();

  return (
    <Page title={formatMessage({ id: 'navigation.add' })}>
      <Form
        onSubmit={data => {
          setError('');
          setSuccess('');
          setFormProcessing(true);
          axios
            .put(`${apiBase}project/`, {
              url: data.url,
              userID: user.ID,
            })
            .then(resp => {
              setFormProcessing(false);
              setSuccess(formatMessage({ id: 'project.add.success' }));
              fetchMe();
              console.log(resp.data);
              route(`/project/${resp.data.ID}`);
            })
            .catch(err => {
              setError(formatMessage({ id: 'project.add.failed' }));
              setFormProcessing(false);
            });
        }}
      >
        <InputText
          name="url"
          label={formatMessage({ id: 'project.url' })}
          register={{
            required: formatMessage({ id: 'form.required' }),
            pattern: {
              value: /^((https|http):\/\/([a-z0-9.\/?\-]*))$/,
              message: formatMessage({ id: 'form.required.url' }),
            },
          }}
          inline
        />
        {error !== '' && <FormError>{error}</FormError>}
        {success !== '' && <FormSuccess>{success}</FormSuccess>}
        <FormControls>
          <Button
            text={formatMessage({ id: 'project.add' })}
            type="submit"
            loading={formProcessing}
            style="primary"
          />
        </FormControls>
      </Form>
    </Page>
  );
};

export default connect('user', storeUserActions)(ProjectsAdd);
