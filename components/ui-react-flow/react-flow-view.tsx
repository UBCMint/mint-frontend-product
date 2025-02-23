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

import FilterNode from '@/components/nodes/filter-node';
import SignalGraphNode from '@/components/nodes/signal-graph-node';
import { MetaDataContext } from '@/context/MetaDataContext';
import Sidebar from '@/components/ui-sidebar/sidebar';
import TestNode from '@/components/nodes/test-node';
export default function ReactFlowView() {
    const { nodes, onNodesChange, edges, setEdges, onEdgesChange, nodeTypes } =
        useContext(MetaDataContext);

    // const nodeTypes = {
    //     testNode: TestNode,
    //     filterNode: FilterNode,
    //     signalGraphNode: SignalGraphNode,
    // };

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
                    <Sidebar />
                </Panel>
            </ReactFlow>
        </div>
    );
}
