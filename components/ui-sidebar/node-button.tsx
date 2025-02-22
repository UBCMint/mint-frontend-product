import React from 'react';
import { Button } from '@/components/ui/button';
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from '@/components/ui/hover-card';
import { InfoCircledIcon } from '@radix-ui/react-icons';
import DotGrid from '@/components/radix/dotgrid';

interface RecentButtonProps {
    label?: string;
    description?: string;
    draggable?: boolean;
    onDragStart?: (e: React.DragEvent<HTMLDivElement>) => void;
}

// black info button
const InfoIcon = () => (
    <div className="w-3 h-3 rounded-full bg-black flex items-center justify-center cursor-pointer">
        <InfoCircledIcon className="w-6 h-6 text-white" />
    </div>
);

const NodeButton = ({
    label = 'Node Name',
    description = 'Node Description Lorem ipsum dolor sitamet',
    draggable = false,
    onDragStart,
}: RecentButtonProps) => {
    return (
        <div
            className="w-full mb-4" // width full, max width 250px, margin bottom 4px, MIGHT CHANGE
            draggable={draggable}
            onDragStart={onDragStart}
        >
            <Button variant="outline" className="w-full h-16 justify-between">
                <div className="flex items-center">
                    <DotGrid />
                    <span>{label}</span>
                </div>
                <div>
                    <HoverCard>
                        <HoverCardTrigger asChild>
                            <div className="flex items-center">
                                <InfoIcon />
                            </div>
                        </HoverCardTrigger>
                        <HoverCardContent
                            side="right"
                            align="center"
                            alignOffset={0}
                            className="relative p-3 max-w-sm drop-shadow-lg"
                            sideOffset={22}
                        >
                            <p className="text-sm text-muted-foreground whitespace-normal font-geist">
                                {description}
                            </p>
                        </HoverCardContent>
                    </HoverCard>
                </div>
            </Button>
        </div>
    );
};

export default NodeButton;
