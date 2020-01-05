// @flow

import { h } from 'preact';
import RequestsCssTextarea from '@app/Dashboard/Requests/CssTextarea.jsx';
import { useEffect, useState } from 'preact/hooks';
import axios from 'axios';
import { useIntl } from 'react-intl';
import { apiBase } from '@vendor/config';

const RequestsSingleModalCssTextarea = ({
  url,
  className = '',
}: {
  url: string,
  className?: string,
}) => {
  const { formatMessage } = useIntl();
  const [content, setContent] = useState(
    formatMessage({ id: 'project.request.css.loading' })
  );

  useEffect(() => {
    axios
      .get(apiBase + url)
      .then(resp => setContent(resp.data))
      .catch(error =>
        setContent(formatMessage({ id: 'project.request.css.failed' }))
      );
  }, [url]);

  return <RequestsCssTextarea content={content} className={className} />;
};

export default RequestsSingleModalCssTextarea;
