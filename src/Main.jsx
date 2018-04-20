import React from 'react';
import ReactDom from 'react-dom';
import App from './views';

if (typeof window !== 'undefined') {
  ReactDom.render(<App />, document.getElementById('main'));
}
