// @flow

import { h } from 'preact';

const ModalControls = ({ children }: { children: any }) => (
  <div className="mt-6 pt-4 border-gray-300 border-t flex justify-end">
    {children}
  </div>
);

export default ModalControls;
