// @flow

import { h } from 'preact';
import type { Request } from '@vendor/types';
import { useIntl } from 'react-intl';
import RequestsSingle from '@app/Dashboard/Requests/Single.jsx';
import { Button } from '@theme/index';

const Requests = ({ requests, ...rest }: { requests: Array<Request> }) => {
  const { formatMessage } = useIntl();
  return (
    <div {...rest}>
      <h2 className="mb-4">{formatMessage({ id: 'project.requests' })}</h2>
      <div className="flex w-full py-4 items-center font-bold">
        <p className="w-4/12">
          {formatMessage({ id: 'project.request.date' })}
        </p>
        <p>{formatMessage({ id: 'project.request.url' })}</p>
      </div>
      {requests.length === 0 && (
        <p>{formatMessage({ id: 'project.requests.none' })}</p>
      )}
      {requests
        .sort((a, b) =>
          a.generated < b.generated ? 1 : b.generated < a.generated ? -1 : 0
        )
        .map(request => (
          <RequestsSingle request={request} />
        ))}
    </div>
  );
};

export default Requests;
