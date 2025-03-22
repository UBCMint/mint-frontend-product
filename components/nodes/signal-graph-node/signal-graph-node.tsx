import { useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Handle, Position } from '@xyflow/react';
import SignalGraphPreview from './signal-graph-preview';
import useWebsocket from '@/hooks/useWebsocket';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import SignalGraphView from './signal-graph-full';
import { GlobalProvider, useGlobalContext } from '@/context/GlobalContext';

const SignalGraphNode = () => {
    const { renderData } = useWebsocket(20, 10);

    const processedData = renderData.map((item) => ({
        time: item.time,
        signal1: item.signals[0],
        signal2: item.signals[1],
        signal3: item.signals[2],
        signal4: item.signals[3],
        signal5: item.signals[4],
    }));

    return (
        <Card>
            <Handle type="target" position={Position.Left} />
            <Handle type="source" position={Position.Right} />
            <Dialog>
                <DialogTrigger>
                    <div className="w-[400px] h-[400px]">
                        <SignalGraphPreview data={processedData} />
                    </div>
                </DialogTrigger>
                <DialogContent className="w-[80vw] h-[80vh] max-w-none max-h-none">
                    <DialogHeader>
                        <DialogTitle>Signal Graph</DialogTitle>
                        <DialogDescription>
                            Here is a preview of the signal graph.
                        </DialogDescription>
                    </DialogHeader>
                    <Card>
                        <div className="w-full h-full">
                            <SignalGraphView data={processedData} />
                        </div>
                    </Card>
                </DialogContent>
            </Dialog>
        </Card>
    );
};

export default () => {
    return <SignalGraphNode />;
};
