// @flow

import { h } from 'preact';
import type { Project } from '@vendor/types';
import { Button, Modal, ModalControls } from '@theme/index';
import { useIntl } from 'react-intl';

const ProjectsSingleModal = ({
  project,
  onClose,
}: {
  project: Project,
  onClose: Function,
}) => {
  const { formatMessage } = useIntl();

  return (
    <Modal
      title={formatMessage({ id: 'project.request.create' })}
      onClose={() => onClose()}
    >
      <p>Test</p>
      <ModalControls>
        <Button text={formatMessage({ id: 'project.request.create.do' })} />
      </ModalControls>
    </Modal>
  );
};

export default ProjectsSingleModal;
