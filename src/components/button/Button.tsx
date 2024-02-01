import React from 'react';

interface RevealButtonProps {
  onReveal: () => void;
}

const RevealButton: React.FC<RevealButtonProps> = ({ onReveal }) => {
  return (
    <button onClick={onReveal} className="reveal-button">
      Reveal Card
    </button>
  );
};

export default RevealButton;
