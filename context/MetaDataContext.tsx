'use client';

import { createContext, ReactNode, useState } from 'react';
import { Node, Edge, OnNodesChange, OnEdgesChange } from '@xyflow/react';
import { useNodesState, useEdgesState } from '@xyflow/react';
import TestNode from '@/components/nodes/test-node';
import FilterNode from '@/components/nodes/filter-node';
import SignalGraphNode from '@/components/nodes/signal-graph-node';
import SourceNode from '@/components/nodes/source-node';

type NodeData = {
    label?: string;
};

type NodeDefinition = Node<NodeData>;

type NodeTypes = {
    source: typeof SourceNode;
    testNode: typeof TestNode;
    filterNode: typeof FilterNode;
    signalGraphNode: typeof SignalGraphNode;
};

interface MetaDataContextType {
    nodes: NodeDefinition[];
    setNodes: React.Dispatch<React.SetStateAction<NodeDefinition[]>>;
    onNodesChange: OnNodesChange;
    edges: Edge[];
    setEdges: React.Dispatch<React.SetStateAction<Edge[]>>;
    onEdgesChange: OnEdgesChange;
    nodeTypes: NodeTypes;
    setNodeTypes: React.Dispatch<React.SetStateAction<NodeTypes>>;
    addNode: (node: NodeDefinition) => void;
}

// Default node types configuration
const DEFAULT_NODE_TYPES: NodeTypes = {
    source: SourceNode,
    testNode: TestNode,
    filterNode: FilterNode,
    signalGraphNode: SignalGraphNode,
};

// Create context with proper typing
export const MetaDataContext = createContext<MetaDataContextType>({
    nodes: [],
    setNodes: () => {},
    onNodesChange: () => {},
    edges: [],
    setEdges: () => {},
    onEdgesChange: () => {},
    nodeTypes: DEFAULT_NODE_TYPES,
    setNodeTypes: () => {},
    addNode: () => {},
});

export function MetaDataContextProvider({
    children,
}: {
    children: ReactNode;
}): JSX.Element {
    const [nodes, setNodes, onNodesChange] = useNodesState<NodeDefinition>([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [nodeTypes, setNodeTypes] = useState<NodeTypes>(DEFAULT_NODE_TYPES);

    const addNode = (newNode: NodeDefinition) => {
        setNodes((prev) => [...prev, newNode]);
    };

    return (
        <MetaDataContext.Provider
            value={{
                nodes,
                setNodes,
                onNodesChange,
                edges,
                setEdges,
                onEdgesChange,
                nodeTypes,
                setNodeTypes,
                addNode,
            }}
        >
            {children}
        </MetaDataContext.Provider>
    );
}

export default MetaDataContextProvider;
