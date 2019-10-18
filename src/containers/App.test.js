import { shallow } from 'enzyme';
import React from 'react';
import { App } from './App';

it('expect to render App component', () => {
    expect(shallow(<App />)).toMatchSnapshot();
})
