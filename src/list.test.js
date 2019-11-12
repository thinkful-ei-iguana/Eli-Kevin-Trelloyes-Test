import React from 'react';
import ReactDom from 'react-dom';
import Card from './Card';
import './Card.css';
import List from './List';
import './List.css';

//List smoke test (hitting an error on List.js line 12 at .map)
it('renders without crashing', () => {
    const smokeList = document.createElement('div');
    ReactDom.render(<List />, smokeList);
    ReactDom.unmountComponentAtNode(smokeList);
})

//List snapshot test
