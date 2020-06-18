import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Card from './Card';

describe('Card component', () => {

    test('renders Card component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Card />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

});