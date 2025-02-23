import SignalGraph from '@/components/ui-signal-graph/signal-graph';
import { useRouter } from 'next/navigation';
import { Handle, Position } from '@xyflow/react';

export default function SignalGraphNode() {
    const router = useRouter();

    // Sample data for table and graph
    const signalData = [
        {
            time: '12:34:43 PM',
            signal1: 24,
            signal2: 11,
            signal3: 43,
            signal4: 30,
            signal5: 49,
        },
        {
            time: '12:34:44 PM',
            signal1: 67,
            signal2: 28,
            signal3: 50,
            signal4: 31,
            signal5: 40,
        },
        {
            time: '12:34:45 PM',
            signal1: 31,
            signal2: 85,
            signal3: 11,
            signal4: 34,
            signal5: 22,
        },
        {
            time: '12:34:46 PM',
            signal1: 89,
            signal2: 33,
            signal3: 5,
            signal4: 87,
            signal5: 21,
        },
        {
            time: '12:34:47 PM',
            signal1: 17,
            signal2: 15,
            signal3: 86,
            signal4: 23,
            signal5: 8,
        },
        {
            time: '12:34:48 PM',
            signal1: 82,
            signal2: 4,
            signal3: 27,
            signal4: 56,
            signal5: 18,
        },
        {
            time: '12:34:49 PM',
            signal1: 74,
            signal2: 92,
            signal3: 58,
            signal4: 30,
            signal5: 49,
        },
    ];

    const handleClick = () => {
        router.push('/chart');
    };

    return (
        <div className="relative">
            <Handle type="target" position={Position.Left} />
            <Handle type="source" position={Position.Right} />
            <div
                onClick={handleClick}
                className="cursor-pointer hover:opacity-80 transition-opacity w-[400px] h-[400px] bg-white p-4"
            >
                <SignalGraph data={signalData} />
            </div>
        </div>
    );
}
