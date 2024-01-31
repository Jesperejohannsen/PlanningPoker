// src/App.tsx
import React, { useState } from 'react';
import './App.css';
import PokerCard from './components/pokercard/PokerCard';

const cardValues = ['0', '1', '2', '3', '5', '8', '13', '21', '?'];

const App: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [reveal, setReveal] = useState<boolean>(false); // Add state to manage reveal

  const handleSelectCard = (value: string) => {
    setSelectedCard(value);
    if (reveal) setReveal(false); // Reset reveal state if a new card is selected
  };

  return (
    <div className="App">
      <div className="cards-container">
        {cardValues.map(value => (
          <PokerCard
            key={value}
            value={value}
            onSelect={handleSelectCard}
            isSelected={selectedCard === value && reveal} // Only show as selected if revealed
          />
        ))}
      </div>
      <button className="reveal-button" onClick={() => setReveal(true)}>Reveal Cards</button>
    </div>
  );
};

export default App;
