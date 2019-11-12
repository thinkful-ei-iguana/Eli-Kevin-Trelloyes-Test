import React, { Component } from 'react';
import List from './List';
import Card from './Card';
import './App.css';

class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  };

  render() {
    const { store } = this.props
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
            />
          ))}
        </div>
      {/*Line added for Card snapshot test*/}
      <Card />
      {/*Line added for List snapshot test*/}
      </main>
    );
  }
}

export default App;
