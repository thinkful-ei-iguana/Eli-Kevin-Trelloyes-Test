import React from 'react';
import ReactDom from 'react-dom';
import Card from './Card';
import './Card.css';
import List from './List';
import './List.css';
import renderer from 'react-test-renderer';

//List smoke test (hitting an error on List.js line 12 at .map)
it('renders without crashing', () => {
    const smokeList = document.createElement('div');
    ReactDom.render(<List cards ={[]}/>, smokeList);
    ReactDom.unmountComponentAtNode(smokeList);
})

//List snapshot test
it('renders the UI as expected', () => {
    const tree = renderer
        .create(<List cards ={[]}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});