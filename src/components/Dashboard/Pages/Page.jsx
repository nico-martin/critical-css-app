// @flow

import { h } from 'preact';

const Page = ({
  title,
  children,
  controls,
}: {
  title: string,
  children?: any,
  controls?: any,
}) => {
  return (
    <div className="mt-4">
      <div className="flex items-center w-full">
        <h1>{title}</h1>
        {controls && <div className="ml-auto">{controls}</div>}
      </div>
      <div className="mt-6">{children}</div>
    </div>
  );
};

export default Page;
