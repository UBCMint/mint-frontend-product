import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Handle, Position } from '@xyflow/react';
import SignalGraphPreview from './signal-graph-preview';
import useWebsocket from '@/hooks/useWebsocket';

export default function SignalGraphNode() {
    const { renderData } = useWebsocket(20, 10, true);

    console.log(renderData);

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
            <div className="w-[400px] h-[400px]">
                <SignalGraphPreview data={processedData} />
            </div>
        </Card>
    );
}
