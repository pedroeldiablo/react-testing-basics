import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;

beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: 'john',
        isPending: false

    }
    wrapper = shallow(<MainPage { ...mockProps } />)
});

it('renders MainPage without crashing', () => {
    expect(wrapper).toMatchSnapshot();
});

it('filters searched robots', () => {
    expect(wrapper.instance().filterRobots()).toEqual([])
});

it('filters the robots correctly', () => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'John',
            email: 'john@gmail.com'
        }],
        searchField: 'j',
        isPending: false

    };

    wrapper = shallow(<MainPage { ...mockProps } />);

    expect(wrapper.instance().filterRobots()).toEqual([{
        id: 3,
        name: 'John',
        email: 'john@gmail.com'
    }])
});

it('filters the robots correctly 2', () => {
    const mockProps2 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'John',
            email: 'john@gmail.com'
        }],
        searchField: 'b',
        isPending: false

    };

    wrapper = shallow(<MainPage { ...mockProps2 } />);

    expect(wrapper.instance().filterRobots()).toEqual([])
});
