import React from 'react';
import ReactDom from 'react-dom';
import Card from './Card';
import './Card.css';
import renderer from 'react-test-renderer';

//Card smoke test
it('renders without crashing', () => {
    const smokeCard = document.createElement('div');
    ReactDom.render(<Card />, smokeCard);
    ReactDom.unmountComponentAtNode(smokeCard);
})

//Card snapshot test
it('renders the UI as expected', () => {
    const tree = renderer
        .create(<Card />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});