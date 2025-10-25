import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Fetched #1' }, { name: 'Fetched #2' }],
  });
});

afterEach(() => {
  moxios.uninstall();
});

it('can fetch a list of commetns and display them', (done) => {
  // Attemp to render the entire app

  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  // find the 'fetchComments' button and click it

  wrapped.find('.fetch-comments').simulate('click');

  // expect to find a list of comments
  moxios.wait(() => {
    wrapped.update();

    try {
      expect(wrapped.find('li').length).toEqual(2);
      done();
    } catch (error) {
      done.fail(error);
    } finally {
      wrapped.unmount();
    }
  });
});
