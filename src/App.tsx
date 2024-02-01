import React, { useState } from 'react';
import './App.css';
import PokerCard from './components/pokercard/PokerCard';

const cardValues = ['0', '1', '2', '3', '5', '8', '13', '21', '?'];

const App: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [isRevealed, setIsRevealed] = useState<boolean>(false);

  const handleSelectCard = (value: string) => {
    setSelectedCard(value);
    setIsRevealed(false); // Reset reveal state when a new card is selected
  };

  const handleReveal = () => {
    setIsRevealed(true);
  };

  return (
    <div className="App">
      <div className="cards-container">
        {cardValues.map(value => (
          <PokerCard
            key={value}
            value={value}
            onSelect={() => handleSelectCard(value)}
            isRevealed={isRevealed && selectedCard === value}
          />
        ))}
      </div>
      <button onClick={handleReveal} className="reveal-button">Reveal Card</button>
    </div>
  );
};

export default App;
