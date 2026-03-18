import { useEffect, useCallback } from 'react';

const KONAMI_CODE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

export function useKonamiCode(onActivate: () => void) {
  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      const key = event.key === ' ' ? 'b' : event.key.toLowerCase();

      // For arrow keys, use the key property directly
      let keyToCheck = key;
      if (event.key.startsWith('Arrow')) {
        keyToCheck = event.key;
      }

      // Store the key sequence in sessionStorage
      const current = sessionStorage.getItem('konamiSequence') || '';
      let newSequence = current + keyToCheck;

      // Keep only the last 10 keys
      if (newSequence.length > KONAMI_CODE.length) {
        newSequence = newSequence.slice(-KONAMI_CODE.length);
      }

      sessionStorage.setItem('konamiSequence', newSequence);

      // Check if the sequence matches
      const storedSequence = sessionStorage.getItem('konamiSequence') || '';
      const matches = KONAMI_CODE.every((k, i) => k === storedSequence.split('').slice(-(KONAMI_CODE.length - i))[0] || k === storedSequence[i]);

      // More reliable check
      if (storedSequence.endsWith(KONAMI_CODE.join(''))) {
        sessionStorage.setItem('konamiSequence', '');
        onActivate();
      }
    },
    [onActivate]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);
}
