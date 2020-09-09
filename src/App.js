import React from 'react';
import Card from './components/Card';
import Dealer from './components/Dealer';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Deck of Cards</h1>
      <Dealer />
    </div>
  );
}

export default App;
