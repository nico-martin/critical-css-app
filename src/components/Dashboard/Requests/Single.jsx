// @flow

import { h } from 'preact';
import type { Request } from '@vendor/types';
import { useIntl } from 'react-intl';
import RequestsSingleModal from '@app/Dashboard/Requests/SingleModal.jsx';
import moment from 'moment';
import { useState } from 'preact/hooks';
import { Button } from '@theme';

const RequestsSingle = ({ request, ...rest }: { request: Request }) => {
  const [singleModal, setSingleModal] = useState(false);
  const { formatMessage } = useIntl();
  const date = moment(new Date(request.generated));
  return (
    <div {...rest}>
      <div className="flex w-full border-gray-300 border-t py-4 items-center text-sm hover:bg-gray-100">
        <p className="w-4/12">{date.format('LLL')}</p>
        <p>{request.url}</p>
        <Button
          text={formatMessage({ id: 'project.request.show' })}
          onClick={() => setSingleModal(true)}
          className="ml-auto"
        />
      </div>
      {singleModal && (
        <RequestsSingleModal
          request={request}
          onClose={() => setSingleModal(false)}
        />
      )}
    </div>
  );
};

export default RequestsSingle;
