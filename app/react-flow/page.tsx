'use client'; // need this at the top since React Flow is a client component

import React, { useCallback } from 'react';
import {
    ReactFlow,
    useNodesState,
    useEdgesState,
    addEdge,
    Controls,
    Background,
    Panel,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';
import Filter from '../filter/page';

const initialNodes = [
    { id: '1', position: { x: 100, y: 100 }, data: { label: 'Node 1' } },
    { id: '2', position: { x: 100, y: 200 }, data: { label: 'Node 2' } },
    { id: '3', position: { x: 100, y: 300}, type: 'filterNode', data: {label: 'Filter Node'}},
];

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' },{ id: 'e2-3', source: '2', target: '3'}];


export default function App() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const nodeTypes = {
        filterNode: Filter,
    };
    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)),
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
