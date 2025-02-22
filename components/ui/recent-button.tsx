import React from 'react';
import { Button } from '@/components/ui/button';
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from '@/components/ui/hover-card';
import { InfoCircledIcon } from '@radix-ui/react-icons';

interface RecentButtonProps {
    label?: string;
    description?: string;
}

const DotGrid = () => (
    <div className="grid grid-rows-3 grid-cols-2 gap-1 mr-5 h-4">
        {[...Array(6)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-current rounded-full" />
        ))}
    </div>
);

const InfoIcon = () => (
    <div className="w-3 h-3 rounded-full bg-black flex items-center justify-center cursor-pointer">
        <InfoCircledIcon className="w-6 h-6 text-white" />
    </div>
);

const RecentButton = ({
    label = 'Node Name',
    description = 'Node Description Lorem ipsum dolor sitamet',
}: RecentButtonProps) => {
    return (
        <div className="w-full mb-4">
            <Button
                variant="outline"
                className="w-full h-20 justify-between px-4 flex items-center bg-white hover:bg-white/90"
            >
                <div className="flex items-center">
                    <DotGrid />
                    <span className="text-2xl font-geist">{label}</span>
                </div>
                <div className="flex items-center h-full">
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
                            sideOffset={35}
                        >
                            <div className="absolute left-0 top-1/2 -translate-x-2 -translate-y-2 w-4 h-4 rotate-45 bg-white border-l border-b border-border" />
                            <div className="relative z-10 bg-white">
                                <p className="text-sm text-muted-foreground whitespace-normal font-geist">
                                    {description}
                                </p>
                            </div>
                        </HoverCardContent>
                    </HoverCard>
                </div>
            </Button>
        </div>
    );
};

export default RecentButton;
