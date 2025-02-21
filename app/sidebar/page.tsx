"use client"
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Cross1 from '@/components/radix/cross1';
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from '@/components/ui/resizable';
import RecentButton from '@/components/ui/recent-button';
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";

export default function SelectionSidebar() {

    const [dropCoords, setDropCoords] = useState<{ x: number; y: number } | null>(null);
    const [draggedItem, setDraggedItem] = useState<string | null>(null);

    // Handle the drag start event
    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, item: string) => {
        setDraggedItem(item);
    };

    useEffect(() => {
        const handleDrop = (e: DragEvent) => {
            e.preventDefault();
            const x = e.clientX;
            const y = e.clientY;
            setDropCoords({ x, y });
            console.log(`Dropped ${draggedItem} at X: ${x}, Y: ${y}`);
        };

        const handleDragOver = (e: DragEvent) => {
            e.preventDefault(); // Allows drop anywhere
        };

        window.addEventListener("drop", handleDrop);
        window.addEventListener("dragover", handleDragOver);

        return () => {
            window.removeEventListener("drop", handleDrop);
            window.removeEventListener("dragover", handleDragOver);
        };
    }, [draggedItem]);
    
    return (
        <ResizablePanelGroup
            direction="horizontal"
            className="min-h-screen p-6"
        >
            <ResizablePanel className="min-h-full min-w-fit" defaultSize={1}>
                <Card className="h-full min-w-fit">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle>Nodes</CardTitle>
                        <Cross1 />
                    </CardHeader>
                    
                    <CardContent>
                        <div className='h-10'>
                        {dropCoords && (
                                <div className="absolute bg-blue-500 text-white text-sm p-2">
                                    Dropped at: X: {dropCoords.x}, Y: {dropCoords.y}
                                </div>
                            )}
                        </div>
                        <Input type="search" placeholder="Search" className="pl-10" />
                        <div >
                            <RecentButton
                                label="Node Name 1"
                                description="Drag this node anywhere on the page."
                                draggable={true}
                                onDragStart={(e) => handleDragStart(e, "Node 1")}
                            />
                            <RecentButton
                                label="Node Name 2"
                                description="Drag this node anywhere on the page."
                                draggable={true}
                                onDragStart={(e) => handleDragStart(e, "Node 2")}
                            />
                        </div>
                    </CardContent>
                </Card>
            </ResizablePanel>
            <ResizableHandle withHandle className="bg-border-none" />
            <ResizablePanel defaultSize={99} />
        </ResizablePanelGroup>
    );
}
