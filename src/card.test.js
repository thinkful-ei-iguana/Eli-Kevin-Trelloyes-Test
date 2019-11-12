import React from 'react';
import ReactDom from 'react-dom';
import Card from './Card';
import './Card.css';

//Card smoke test
it('renders without crashing', () => {
    const smokeCard = document.createElement('div');
    ReactDom.render(<Card />, smokeCard);
    ReactDom.unmountComponentAtNode(smokeCard);
})

//Card snapshot test
