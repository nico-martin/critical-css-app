// @flow

import React from 'react';
import type { Node } from 'react';
import ReactDOM from 'react-dom';
import './ShadowBox.scss';

const Portal = ({ children }) => {
  return ReactDOM.createPortal(children, document.querySelector('#shadowbox'));
};

export default (props: { close: Function, children: Node }) => {
  return (
    <Portal>
      <div className="shadowbox">
        <div className="shadowbox__shadow" onClick={props.close} />
        <div className="shadowbox__box">
          <button className="shadowbox__close" onClick={props.close}>
            Close
          </button>
          <div className="shadowbox__content">{props.children}</div>
        </div>
      </div>
    </Portal>
  );
};
