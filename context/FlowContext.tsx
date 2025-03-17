import { createContext, useContext, useState, useEffect } from 'react';
import { ReactNode } from 'react';

const FlowContext = createContext<{
    type: any;
    setType: React.Dispatch<React.SetStateAction<any>>;
    AvailableNodes: { label: string; description: string; category: string }[];
    onDragOver: (event: React.DragEvent) => void;
    onDrop: (event: React.DragEvent) => void;
}>({
    type: null,
    setType: () => {},
    AvailableNodes: [],
    onDragOver: () => {},
    onDrop: () => {},
});

export const FlowProvider = ({ children }: { children: ReactNode }) => {
    const [type, setType] = useState(null);

    useEffect(() => {
        console.log('New type value:', type);
    }, [type]);

    const onDragOver = (event: React.DragEvent) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    };

    const onDrop = (event: React.DragEvent) => {
        event.preventDefault();

        console.log('Dropped nodeType:', type);

        if (!type) {
            return;
        }

        const position = screenToFlowPosition({
            x: event.clientX,
            y: event.clientY,
        });
        const newNode = {
            id: getId(),
            type,
            position,
            data: { label: `${type} node` },
        };

        setNodes((nds) => nds.concat(newNode));
    };

    // all the implemented custom nodes HERE
    const AvailableNodes = [
        {
            id: 'source-node',
            label: 'Source',
            description: 'Drag this node anywhere on the page.',
            category: 'Settings',
        },
        {
            id: 'filter-node',
            label: 'Filter',
            description: 'Drag this node anywhere on the page.',
            category: 'Filters',
        },
        {
            id: 'signal-graph-node',
            label: 'Signal Graph',
            description: 'Drag this node anywhere on the page.',
            category: 'Visualizations',
        },
    ];

    return (
        <FlowContext.Provider
            value={{ type, setType, AvailableNodes, onDragOver, onDrop }}
        >
            {children}
        </FlowContext.Provider>
    );
};

export const useFlowContext = () => useContext(FlowContext);
