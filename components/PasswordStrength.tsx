'use client';

import { useState } from 'react';

interface PasswordStrengthProps {
  password: string;
}

export default function PasswordStrength({ password }: PasswordStrengthProps) {
  const calculateStrength = (pwd: string): number => {
    let strength = 0;

    if (pwd.length >= 8) strength++;
    if (pwd.length >= 12) strength++;
    if (/[a-z]/.test(pwd)) strength++;
    if (/[A-Z]/.test(pwd)) strength++;
    if (/[0-9]/.test(pwd)) strength++;
    if (/[^a-zA-Z0-9]/.test(pwd)) strength++;

    if (pwd.length === 0) return 0;
    if (strength <= 2) return 1;
    if (strength <= 4) return 2;
    return 3;
  };

  const strength = calculateStrength(password);
  const labels = ['Weak', 'Medium', 'Strong'];
  const colors = ['#F43F5E', '#F59E0B', '#10B981'];
  const activeColor = colors[strength - 1] || '#64748B';

  return (
    <div className="password-strength">
      <div className="strength-bars">
        <div className="strength-bar" style={{ background: strength >= 1 ? activeColor : '#64748B' }}></div>
        <div className="strength-bar" style={{ background: strength >= 2 ? activeColor : '#64748B' }}></div>
        <div className="strength-bar" style={{ background: strength >= 3 ? activeColor : '#64748B' }}></div>
      </div>
      {password && <span className="strength-label">{labels[strength - 1] || ''}</span>}
    </div>
  );
}
