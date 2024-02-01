import React from 'react';
import './App.css';
import PokerCardsContainer from './components/pokercard/PokerCardsContainer';

const cardValues = ['0', '1', '2', '3', '5', '8', '13', '21', '?'];

const App: React.FC = () => {
  return (
    <div className="App">
      <PokerCardsContainer cardValues={cardValues} />
    </div>
  );
};

export default App;
