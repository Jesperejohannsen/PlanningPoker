import React, { useState } from 'react';
import PokerCard from './PokerCard';
import RevealButton from '../button/Button';

interface PokerCardsContainerProps {
  cardValues: string[];
}

const PokerCardsContainer: React.FC<PokerCardsContainerProps> = ({ cardValues }) => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [isRevealed, setIsRevealed] = useState<boolean>(false);

  const handleSelectCard = (value: string) => {
    setSelectedCard(value);
    setIsRevealed(false);
  };

  const handleReveal = () => {
    setIsRevealed(true);
  };

  return (
    <>
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
      <RevealButton onReveal={handleReveal} />
    </>
  );
};

export default PokerCardsContainer;
