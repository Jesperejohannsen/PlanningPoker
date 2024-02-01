import React from 'react';
import './PokerCard.css';

interface PokerCardProps {
  value: string;
  onSelect: () => void;
  isRevealed: boolean;
}

const PokerCard: React.FC<PokerCardProps> = ({ value, onSelect, isRevealed }) => {
  return (
    <div className={`poker-card ${isRevealed ? 'revealed' : ''}`} onClick={onSelect}>
      <div className="poker-card-inner">
        <div className="poker-card-front">?</div>
        <div className="poker-card-back">{value}</div>
      </div>
    </div>
  );
};

export default PokerCard;
