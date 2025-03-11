'use client';
import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from '@/components/ui/resizable';
import { Input } from '@/components/ui/input';
import Cross1 from '@/components/radix/cross1';
import { Categories } from './categories-collapsible';
import RecentButton from './node-button';
import { TypographyP } from '../typography/typography';
import { MetaDataContext } from '@/context/MetaDataContext';
import { useContext } from 'react';
import { useReactFlow } from '@xyflow/react';

// PUT THIS INSIDE THE CONTEXT
const RecentButtons : string[] = [];

// PUT THIS INSIDE THE CONTEXT
const AvailableNodes = [
    {
        label: 'Test',
        description: 'Drag this node anywhere on the page.',
        category: 'source',
    },
    {
        label: 'Filter',
        description: 'Drag this node anywhere on the page.',
        category: 'filter',
    },
    {
        label: 'Signal Graph',
        description: 'Drag this node anywhere on the page.',
        category: 'viz',
    },
    // {
    //     label: 'Stress Prediction',
    //     description: 'Drag this node anywhere on the page.',
    //     category: 'ml',
    // },
];

const uniqueCategories = [
    ...new Set(AvailableNodes.map((node) => node.category)),
];

export default function Sidebar() {
    const { addNode } = useContext(MetaDataContext);
    const reactFlowInstance = useReactFlow();
    const [draggedItem, setDraggedItem] = useState<string | null>(null);
    const [RecentButtons, setRecentButtons] = useState<string[]>([]);
    // Handle the drag start event
    const handleDragStart = (
        e: React.DragEvent<HTMLDivElement>,
        item: string
    ) => {
        console.log(item);
        setDraggedItem(item);
    };

    const handleAddRecentButton = (label: string) => {
        setRecentButtons((prevButtons) => {
            const updatedButtons = prevButtons.filter((btn) => btn !== label);
            updatedButtons.unshift(label);
            if (updatedButtons.length > 3) updatedButtons.pop();
            return updatedButtons;
        });
    };
    
    

    useEffect(() => {
        const handleDrop = (e: DragEvent) => {
            e.preventDefault();

            const position = reactFlowInstance.screenToFlowPosition({
                x: e.clientX,
                y: e.clientY,
            });

            // setDropCoords(position);

            // Map node labels to their corresponding node types
            const nodeTypeMap: { [key: string]: string } = {
                Source: 'sourceNode',
                Filter: 'filterNode',
                'Signal Graph': 'signalGraphNode',
            };

            // Create new node when dropped
            if (draggedItem && addNode) {
                const newNode = {
                    id: `${
                        nodeTypeMap[draggedItem] || draggedItem
                    }-${Date.now()}`,
                    type: nodeTypeMap[draggedItem] || draggedItem, // Use mapped type or fallback to label
                    position: position,
                    data: {},
                };
                addNode(newNode);
                handleAddRecentButton(draggedItem);
            }
        };

        const handleDragOver = (e: DragEvent) => {
            e.preventDefault(); // Allows drop anywhere
        };

        window.addEventListener('drop', handleDrop);
        window.addEventListener('dragover', handleDragOver);

        return () => {
            window.removeEventListener('drop', handleDrop);
            window.removeEventListener('dragover', handleDragOver);
        };
    }, [draggedItem, addNode, reactFlowInstance]);

    return (
        <ResizablePanelGroup direction="horizontal" className="p-4">
            <ResizablePanel className="min-w-fit" defaultSize={1}>
                <Card className="max-h-[calc(100vh-2rem)] flex flex-col">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle>Nodes</CardTitle>
                        <Cross1 />
                    </CardHeader>

                    <CardContent className="overflow-y-auto flex-1">
                        {/* SEARCH INPUT */}
                        <div className="mb-4">
                            <Input
                                type="search"
                                placeholder="Search"
                                className="pl-8"
                            />
                        </div>
                        {/* RECENT BUTTONS */}
                        <div>
                            <TypographyP>Recent</TypographyP>
                            {RecentButtons.map((label, index) => {
                                const nodeData = AvailableNodes.find(
                                    (node) => node.label === label
                                );
                                if (!nodeData) return null;

                                return (
                                    <div key={index} className="mb-4">
                                        <RecentButton
                                            label={nodeData.label}
                                            description={nodeData.description}
                                            draggable={true}
                                            onDragStart={(e) =>
                                                handleDragStart(
                                                    e,
                                                    nodeData.label
                                                )
                                            }
                                        />
                                    </div>
                                );
                            })}
                        </div>
                        {/* CATEGORIES */}
                        <div>
                            {uniqueCategories.map((categoryName) => (
                                <Categories
                                    key={categoryName}
                                    categoryName={categoryName}
                                    availableNodes={AvailableNodes}
                                    onDragStart={handleDragStart}
                                />
                            ))}
                        </div>

                        {/* DEBUG TOOL FOR COORDINATES OF DROP
                        this uses the windows coordinate system, not the react flow coordinate system
                        <div>
                            {dropCoords && (
                                <div
                                    className="fixed bg-blue-500 text-white text-sm p-2"
                                    style={{
                                        left: dropCoords.x,
                                        top: dropCoords.y,
                                        transform: 'translate(-50%, -50%)',
                                        zIndex: 50,
                                    }}
                                >
                                    Dropped at: X: {dropCoords.x}, Y:{' '}
                                    {dropCoords.y}
                                </div>
                            )}
                        </div> */}
                    </CardContent>
                </Card>
            </ResizablePanel>
            <ResizableHandle className="bg-border-none" />
            <ResizablePanel defaultSize={99} />
        </ResizablePanelGroup>
    );
}
