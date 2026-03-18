'use client';

import { useState, useRef } from 'react';

interface Node {
  id: string;
  type: string;
  icon: string;
  name: string;
  desc: string;
  bgColor: string;
}

const initialNodes: Node[] = [
  {
    id: 'trigger',
    type: 'trigger',
    icon: '💬',
    name: 'Trigger',
    desc: 'Customer message',
    bgColor: 'rgba(6,182,212,0.12)',
  },
  {
    id: 'ai',
    type: 'ai',
    icon: '🤖',
    name: 'AI Agent',
    desc: 'Understand intent',
    bgColor: 'rgba(245,158,11,0.12)',
  },
  {
    id: 'action',
    type: 'action',
    icon: '⚡',
    name: 'Action',
    desc: 'CRM + respond',
    bgColor: 'rgba(16,185,129,0.12)',
  },
  {
    id: 'deploy',
    type: 'deploy',
    icon: '🚀',
    name: 'Deploy',
    desc: 'Go live instantly',
    bgColor: 'rgba(244,63,94,0.12)',
  },
];

export default function BuilderDemo() {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [draggedNode, setDraggedNode] = useState<string | null>(null);
  const [showStatus, setShowStatus] = useState(false);
  const flowRef = useRef<HTMLDivElement>(null);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, nodeId: string) => {
    setDraggedNode(nodeId);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!draggedNode || !flowRef.current) return;

    const flow = flowRef.current;
    const rect = flow.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Show status message on successful drop
    setShowStatus(true);
    setTimeout(() => setShowStatus(false), 3000);

    setDraggedNode(null);
  };

  const handleDragEnd = () => {
    setDraggedNode(null);
  };

  return (
    <div className="builder-canvas-wrap reveal">
      <div className="builder-grid-bg"></div>
      <div className="builder-toolbar">
        <div className="builder-toolbar-dot" style={{ background: '#EF4444' }}></div>
        <div className="builder-toolbar-dot" style={{ background: '#F59E0B' }}></div>
        <div className="builder-toolbar-dot" style={{ background: '#10B981' }}></div>
        <div className="builder-toolbar-title">agent-flow-editor.ai</div>
      </div>

      <div
        ref={flowRef}
        className="builder-flow"
        id="builderFlow"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {nodes.map((node, index) => (
          <div key={node.id}>
            <div
              className={`builder-node ${draggedNode === node.id ? 'dragging' : ''}`}
              draggable="true"
              data-node={node.type}
              onDragStart={(e) => handleDragStart(e, node.id)}
              onDragEnd={handleDragEnd}
            >
              <div className="builder-node-icon" style={{ background: node.bgColor }}>
                {node.icon}
              </div>
              <div className="builder-node-name">{node.name}</div>
              <div className="builder-node-desc">{node.desc}</div>
            </div>

            {index < nodes.length - 1 && (
              <div className="builder-connector active">
                <svg width="40" height="24" viewBox="0 0 40 24">
                  <line x1="0" y1="12" x2="34" y2="12" stroke="currentColor" strokeWidth="2" />
                  <polygon points="34,6 40,12 34,18" fill="currentColor" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="builder-palette">
        <div className="builder-palette-item">📊 Analytics</div>
        <div className="builder-palette-item">🎙️ Voice DNA</div>
        <div className="builder-palette-item">📧 Email</div>
        <div className="builder-palette-item">🔀 Condition</div>
        <div className="builder-palette-item">💾 Save to CRM</div>
        <div className="builder-palette-item">⏰ Delay</div>
      </div>

      <div className={`builder-status ${showStatus ? 'visible' : ''}`} id="builderStatus">
        ✓ Agent flow valid — ready to deploy
      </div>
    </div>
  );
}
