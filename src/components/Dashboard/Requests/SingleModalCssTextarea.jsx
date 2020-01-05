// @flow

import { h } from 'preact';
import RequestsCssTextarea from '@app/Dashboard/Requests/CssTextarea.jsx';

const RequestsSingleModalCssTextarea = ({
  url,
  className = '',
}: {
  url: string,
  className?: string,
}) => {
  return (
    <RequestsCssTextarea
      content="could not be laded (does not work yet)"
      className={className}
    />
  );
};

export default RequestsSingleModalCssTextarea;
