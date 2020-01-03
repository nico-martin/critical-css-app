// @flow

import { render, h } from 'preact';
import { useState } from 'preact/hooks';
import { Modal, ButtonGroup, Button } from '@theme';
import { useIntl } from 'react-intl';

type Props = {
  title: string,
  onClose?: Function,
  onConfirm: Function,
  confirmButtonText?: string,
  Success: any,
  children: any,
  width: 'large' | 'medium' | 'small',
};

const ModalConfirm = ({
  title,
  onClose,
  onConfirm,
  confirmButtonText = '',
  Success = '',
  children,
  width,
}: Props) => {
  const [loading: boolean, setLoading] = useState(false);
  const [modalState: 'initial' | 'success' | 'error', setModalState] = useState(
    'initial'
  );
  const { formatMessage } = useIntl();

  const doPromise = () => {
    setLoading(true);
    onConfirm()
      .then(resp => {
        setLoading(false);
        setModalState('success');
      })
      .catch(err => {
        setModalState('error');
      });
  };

  if (modalState === 'success') {
    return (
      <Modal title={title} onClose={() => onClose()} width="small">
        <p>{Success}</p>
      </Modal>
    );
  }

  if (modalState === 'error') {
    return (
      <Modal title={title} onClose={() => onClose()} width="small">
        <p>{formatMessage({ id: 'modal.error' })}</p>
      </Modal>
    );
  }

  return (
    <Modal title={title} onClose={() => onClose()} width={width}>
      {children}
      <div className="mt-6 pt-4 border-gray-300 border-t flex justify-end">
        <Button
          text={formatMessage({ id: 'modal.cancel' })}
          onClick={() => onClose()}
          style="nobutton"
        />
        <Button
          text={
            confirmButtonText === ''
              ? formatMessage({ id: 'modal.confirm' })
              : confirmButtonText
          }
          loading={loading}
          onClick={() => doPromise()}
          className="ml-8"
        />
      </div>
    </Modal>
  );
};
export default ModalConfirm;
