import React from 'react';
import ReactDOM from 'react-dom';

import App from '../App';

it('shows a comment box', () => {
  const div = document.create('div');
  ReactDOM.render(<App />, div);

  // Looks inside the div
  // checks to see if the CommentBox is there

  ReactDOM.unmountComponentAtNode(div);
});
