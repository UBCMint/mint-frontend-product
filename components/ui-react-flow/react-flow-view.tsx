'use client';

import React, { useRef, useEffect } from 'react';
import {
    ReactFlow,
    ReactFlowProvider,
    addEdge,
    useNodesState,
    useEdgesState,
    Controls,
    useReactFlow,
    Background,
    Panel,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import Sidebar from '@/components/ui-sidebar/sidebar';
import { FlowProvider, useFlowContext } from '@/context/FlowContext';

const initialNodes = [
    {
        id: '1',
        type: 'input',
        data: { label: 'input node' },
        position: { x: 250, y: 5 },
    },
];

let id = 0;
const getId = () => `dndnode_${id++}`;

const ReactFlowView = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const { screenToFlowPosition } = useReactFlow();
    const { type, onDragOver, onDrop } = useFlowContext();

    useEffect(() => {
        console.log('FlowContext type:', type);
    }, [type]);

    const onConnect = (params) => {
        setEdges((eds) => addEdge(params, eds));
    };

    return (
        <div>
            <div
                style={{
                    width: '100vw',
                    height: '100vh',
                    position: 'relative',
                }}
            >
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    onDrop={onDrop}
                    onDragOver={onDragOver}
                    fitView
                    style={{ backgroundColor: '#F7F9FB' }}
                >
                    <Controls position="top-right" />
                    <Panel position="top-left">
                        <Sidebar />
                    </Panel>
                    <Background />
                </ReactFlow>
            </div>
        </div>
    );
};

export default () => (
    <ReactFlowProvider>
        <FlowProvider>
            <ReactFlowView />
        </FlowProvider>
    </ReactFlowProvider>
);
