// @flow

import { render, h } from 'preact';
import React from 'react';
import { useIntl } from 'react-intl';

const Page = () => {
  const { formatMessage } = useIntl();

  return (
    <div className="w-full max-w-4xl">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1>Test</h1>
      </div>
      <p className="text-center text-gray-500 text-xs m-auto max-w-2xl">
        {formatMessage(
          { id: 'footer.about' },
          {
            sayhello: (
              <a href="https://sayhello.ch" target="_blank">
                Say Hello GmbH
              </a>
            ),
          }
        )}
      </p>
    </div>
  );
};

export default Page;
