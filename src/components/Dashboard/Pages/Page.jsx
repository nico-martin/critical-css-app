// @flow

import { h } from 'preact';

const Page = ({ title, children }: { title: string, children: any }) => {
  return (
    <div className="mt-4">
      <h1>{title}</h1>
      <div className="mt-4">{children}</div>
    </div>
  );
};

export default Page;
