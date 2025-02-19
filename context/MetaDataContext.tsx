'use client';

import { createContext, ReactNode } from 'react';
import { Node, Edge, OnNodesChange, OnEdgesChange } from '@xyflow/react';
import { useNodesState, useEdgesState } from '@xyflow/react';

const exampleNodes: Node[] = [
  { id: '1', position: { x: 100, y: 100 }, data: { label: 'Node 1' } },
  { id: '2', position: { x: 100, y: 200 }, data: { label: 'Node 2' } },
  { id: '3', position: { x: 100, y: 300 }, type: 'filterNode', data: { label: 'Filter Node' } },
];

const exampleEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3' },
];

interface MetaDataContextProviderProps {
  children: ReactNode;
}

export interface MetaDataContextType {
  nodes: Node[];
  setNodes: React.Dispatch<React.SetStateAction<Node[]>>;
  onNodesChange: OnNodesChange;
  edges: Edge[];
  setEdges: React.Dispatch<React.SetStateAction<Edge[]>>;
  onEdgesChange: OnEdgesChange;
}

export const MetaDataContext = createContext<MetaDataContextType>({} as MetaDataContextType);

export function MetaDataContextProvider({ children }: MetaDataContextProviderProps): JSX.Element {
  const [nodes, setNodes, onNodesChange] = useNodesState(exampleNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(exampleEdges);

  return (
    <MetaDataContext.Provider
      value={{
        nodes,
        setNodes,
        onNodesChange,
        edges,
        setEdges,
        onEdgesChange,
      }}
    >
      {children}
    </MetaDataContext.Provider>
  );
}

export default MetaDataContextProvider;
