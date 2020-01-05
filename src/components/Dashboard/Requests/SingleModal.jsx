// @flow

import { h } from 'preact';
import type { Request } from '@vendor/types';
import { useIntl } from 'react-intl';
import { Modal } from '@theme';
import moment from 'moment';
import RequestsSingleModalCssTextarea from '@app/Dashboard/Requests/SingleModalCssTextarea.jsx';

const RequestsSingleModal = ({
  request,
  onClose,
  ...rest
}: {
  request: Request,
  onClose: Function,
}) => {
  const { formatMessage } = useIntl();
  const date = moment(new Date(request.generated));

  return (
    <Modal
      onClose={() => onClose()}
      title={formatMessage({ id: 'project.request' })}
      {...rest}
    >
      <div className="flex">
        <p className="w-3/12">
          {formatMessage({ id: 'project.request.date' })}
        </p>
        <p>{date.format('LLL')}</p>
      </div>
      <div className="flex">
        <p className="w-3/12">{formatMessage({ id: 'project.request.url' })}</p>
        <p>{request.url}</p>
      </div>
      <div className="flex">
        <p className="w-3/12">
          {formatMessage({ id: 'project.request.sizes' })}
        </p>
        <p>{request.sizes}</p>
      </div>
      <RequestsSingleModalCssTextarea url={request.file} className="mt-4" />
    </Modal>
  );
};

export default RequestsSingleModal;
