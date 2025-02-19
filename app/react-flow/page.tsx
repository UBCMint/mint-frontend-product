'use client';

import React, { useCallback, useContext } from 'react';
import {
  ReactFlow,
  addEdge,
  Controls,
  Background,
  Panel,
  Connection,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import Filter from '../filter/page';
import { MetaDataContext } from '@/context/MetaDataContext';

export default function App() {
  const { nodes, onNodesChange, edges, setEdges, onEdgesChange } = useContext(MetaDataContext);

  const nodeTypes = {
    filterNode: Filter,
  };

  // Use correct type for `params`
  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />
        <Controls />
        <Panel position="top-left">
          <h1>React Flow Demo</h1>
        </Panel>
      </ReactFlow>
    </div>
  );
}
