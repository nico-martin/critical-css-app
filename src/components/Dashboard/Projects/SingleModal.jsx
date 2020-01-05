// @flow

import { h } from 'preact';
import type { Project } from '@vendor/types';
import { Button, Modal, ModalControls, Notification } from '@theme/index';
import { useIntl } from 'react-intl';
import { useState, useRef } from 'preact/hooks';
import axios from 'axios';
import { apiBase } from '@vendor/config';
import { connect } from 'unistore/preact';
import { storeUserActions } from '@store/index';
import RequestsCssTextarea from '@app/Dashboard/Requests/CssTextarea.jsx';

const ProjectsSingleModal = ({
  project,
  onClose,
  fetchMe,
  fetchProjects,
}: {
  project: Project,
  onClose: Function,
  fetchMe: Function,
  fetchProjects: Function,
}) => {
  const { formatMessage } = useIntl();
  const [loading: boolean, setLoading] = useState(false);
  const [error: string, setError] = useState('');
  const [css, setCss] = useState('');
  const [urlValue, setUrlValue] = useState(project.url);
  const urlField = useRef(null);

  const doRequest = () => {
    setError('');
    const url = urlField.current.value;
    setUrlValue(url);
    if (url.indexOf(project.url) !== 0) {
      setError(
        formatMessage(
          { id: 'project.request.create.urlError' },
          { url: project.url }
        )
      );
      return;
    }
    setLoading(true);
    axios
      .post(apiBase, {
        token: project.key,
        url,
        dimensions: {
          desktop: {
            width: 1200,
            height: 800,
          },
          tablet: {
            width: 700,
            height: 300,
          },
        },
      })
      .then(resp => {
        setLoading(false);
        fetchMe();
        fetchProjects();
        setCss(resp.data.css);
      })
      .catch(error => {
        setLoading(false);
        setError(formatMessage({ id: 'project.request.create.error' }));
      });
  };

  if (css !== '') {
    return (
      <Modal
        title={formatMessage({ id: 'project.request.create' })}
        onClose={() => onClose()}
      >
        <RequestsCssTextarea content={css} />
      </Modal>
    );
  }

  return (
    <Modal
      title={formatMessage({ id: 'project.request.create' })}
      onClose={() => onClose()}
    >
      <div className="flex items-center w-full">
        <p className="font-bold w-4/12">
          {formatMessage({ id: 'project.url' })}
        </p>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={urlValue}
          ref={urlField}
        />
      </div>
      {error !== '' && <Notification type="error">{error}</Notification>}
      <ModalControls>
        <Button
          text={formatMessage({ id: 'project.request.create.do' })}
          loading={loading}
          onClick={() => doRequest()}
        />
      </ModalControls>
    </Modal>
  );
};

export default connect('user', storeUserActions)(ProjectsSingleModal);
