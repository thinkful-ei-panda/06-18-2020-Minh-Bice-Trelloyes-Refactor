import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import STORE from './store';
import List from './List';

const props = STORE.lists[0];

describe('List component', () => {

  it('renders List component', () => {
    const section = document.createElement('section');
    ReactDOM.render(<List {...props} />, section);
    ReactDOM.unmountComponentAtNode(section);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<List {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

});