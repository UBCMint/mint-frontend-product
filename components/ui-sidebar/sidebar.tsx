'use client';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from '@/components/ui/resizable';
import Cross1 from '@/components/radix/cross1';
import { Categories } from './categories-collapsible';
import NodeButton from './node-button';
import React, { useState } from 'react';
import { Search } from "lucide-react"


export default function Sidebar() {

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

    const [searchTerm, setSearchTerm] = useState('');

    const filteredNodes = AvailableNodes.filter((node) =>
        node.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const uniqueCategories = [
        ...new Set(AvailableNodes.map((node) => node.category)),
    ];

    return (
        <ResizablePanelGroup direction="horizontal" className="p-4">
            <ResizablePanel className="min-w-fit" defaultSize={1}>
                <Card className="max-h-[calc(100vh-2rem)] flex flex-col">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle>Nodes</CardTitle>
                        <Cross1 />
                    </CardHeader>

                    <div className="flex items-center rounded-md border px-4 py-2 shadow-sm text-sm mx-4 mb-2">
                        <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="outline-none"
                        />
                    </div>

                    <CardContent className="overflow-y-auto flex-1 ">
                        {searchTerm &&
                            filteredNodes.map((node) => (
                                <NodeButton
                                    key={node.id}
                                    id={node.id}
                                    label={node.label}
                                    description={node.description}
                                />
                            ))}
                    </CardContent>

                    <CardHeader className="pt-0">Recent</CardHeader>

                    <CardContent className="overflow-y-auto flex-1">
                        <div>
                            {uniqueCategories.map((categoryName) => (
                                <Categories
                                    key={categoryName}
                                    categoryName={categoryName}
                                    availableNodes={AvailableNodes}
                                />
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </ResizablePanel>
            <ResizableHandle className="bg-border-none" />
            <ResizablePanel defaultSize={99} />
        </ResizablePanelGroup>
    );
}
