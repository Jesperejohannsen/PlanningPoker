import React from 'react';
import './PokerCard.css'; 

interface PokerCardProps {
  value: string;
  onSelect: (value: string) => void;
  isSelected: boolean;
}

const PokerCard: React.FC<PokerCardProps> = ({ value, onSelect, isSelected }) => {
  return (
    <div
      className={`poker-card ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(value)}
    >
      {value}
    </div>
  );
};

export default PokerCard;
