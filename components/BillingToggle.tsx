'use client';

import { useState } from 'react';

interface BillingToggleProps {
  onToggle: (isAnnual: boolean) => void;
}

export default function BillingToggle({ onToggle }: BillingToggleProps) {
  const [isAnnual, setIsAnnual] = useState(false);

  const handleToggle = () => {
    const newValue = !isAnnual;
    setIsAnnual(newValue);
    onToggle(newValue);
  };

  return (
    <div className="billing-toggle-wrapper">
      <div className="billing-toggle">
        <button
          className={`toggle-option ${!isAnnual ? 'active' : ''}`}
          onClick={() => handleToggle()}
        >
          Monthly
        </button>
        <button
          className={`toggle-option ${isAnnual ? 'active' : ''}`}
          onClick={() => handleToggle()}
        >
          Annual
        </button>
        <div className="toggle-slider"></div>
      </div>
      {isAnnual && (
        <div className="discount-badge">Save 20% with annual billing</div>
      )}
    </div>
  );
}
