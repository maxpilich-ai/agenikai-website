'use client';

import { useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface CommandItem {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  action: () => void;
  shortcut?: string;
}

export default function CmdKPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  const commands: CommandItem[] = [
    {
      id: '1',
      title: 'Home',
      description: 'Go to homepage',
      category: 'Navigation',
      icon: '🏠',
      action: () => {
        router.push('/');
        setIsOpen(false);
      },
    },
    {
      id: '2',
      title: 'Features',
      description: 'Explore all features',
      category: 'Navigation',
      icon: '✨',
      action: () => {
        router.push('/features');
        setIsOpen(false);
      },
    },
    {
      id: '3',
      title: 'Pricing',
      description: 'View pricing plans',
      category: 'Navigation',
      icon: '💰',
      action: () => {
        router.push('/pricing');
        setIsOpen(false);
      },
    },
    {
      id: '4',
      title: 'Documentation',
      description: 'Read the docs',
      category: 'Resources',
      icon: '📚',
      action: () => {
        setIsOpen(false);
      },
    },
    {
      id: '5',
      title: 'API Reference',
      description: 'API documentation',
      category: 'Resources',
      icon: '⚙️',
      action: () => {
        setIsOpen(false);
      },
    },
    {
      id: '6',
      title: 'Get Started',
      description: 'Start building',
      category: 'Actions',
      icon: '🚀',
      action: () => {
        router.push('/signup');
        setIsOpen(false);
      },
    },
  ];

  const filteredCommands = commands.filter(
    (cmd) =>
      cmd.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cmd.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(!isOpen);
        setSearchQuery('');
        setActiveIndex(0);
      }

      if (!isOpen) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setActiveIndex((prev) =>
            prev < filteredCommands.length - 1 ? prev + 1 : prev
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setActiveIndex((prev) => (prev > 0 ? prev - 1 : 0));
          break;
        case 'Enter':
          e.preventDefault();
          if (filteredCommands[activeIndex]) {
            filteredCommands[activeIndex].action();
          }
          break;
        case 'Escape':
          e.preventDefault();
          setIsOpen(false);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, searchQuery, filteredCommands, activeIndex]);

  const items: ReactNode[] = [];

  filteredCommands.forEach((cmd, idx) => {
    const lastCmd = filteredCommands[idx - 1];
    const isNewCategory = !lastCmd || lastCmd.category !== cmd.category;

    if (isNewCategory) {
      items.push(
        <div key={`label-${cmd.category}`} className="cmd-group-label">
          {cmd.category}
        </div>
      );
    }

    items.push(
      <div
        key={cmd.id}
        className={`cmd-item ${activeIndex === idx ? 'active' : ''}`}
        onClick={() => {
          cmd.action();
        }}
      >
        <div className="cmd-item-icon">{cmd.icon}</div>
        <div>
          <div>{cmd.title}</div>
          <div style={{ fontSize: '0.75rem', opacity: 0.7 }}>
            {cmd.description}
          </div>
        </div>
        {cmd.shortcut && (
          <div className="cmd-item-right">{cmd.shortcut}</div>
        )}
      </div>
    );
  });

  return (
    <>
      <div
        className={`cmd-overlay ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(false)}
      >
        <div className="cmd-palette" onClick={(e) => e.stopPropagation()}>
          <div className="cmd-search">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search commands..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setActiveIndex(0);
              }}
              autoFocus
            />
            <kbd className="cmd-kbd">ESC</kbd>
          </div>

          <div className="cmd-results">
            {filteredCommands.length > 0 ? (
              items
            ) : (
              <div className="cmd-empty">No commands found</div>
            )}
          </div>

          <div className="cmd-footer">
            <div className="cmd-hint">
              <kbd>↑</kbd>
              <kbd>↓</kbd>
            </div>
            <span>to navigate</span>
            <div className="cmd-hint">
              <kbd>⏎</kbd>
            </div>
            <span>to select</span>
          </div>
        </div>
      </div>
    </>
  );
}
