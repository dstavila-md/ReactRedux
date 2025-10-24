import React from 'react';
import { mount, simulate } from 'enzyme';

import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

it('has a text area and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

it('has a text area that users can type in', () => {
  wrapped
    .find('textarea')
    .simulate('change', { target: { value: 'new string value' } });

  wrapped.update();

  expect(wrapped.find('textarea').prop('value')).toEqual('new string value');
});

it('has a form element', () => {
  expect(wrapped.find('form').length).toEqual(1);
});

it('clears the text area when clicking the submit button', () => {
  wrapped
    .find('textarea')
    .simulate('change', { target: { value: 'new string value' } });

  wrapped.update();

  expect(wrapped.find('textarea').prop('value')).toEqual('new string value');

  wrapped.find('form').simulate('submit');
  wrapped.update();

  expect(wrapped.find('textarea').prop('value')).toEqual('');
});
