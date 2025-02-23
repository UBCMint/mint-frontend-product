'use client';

import SignalTable from '@/components/ui-data-table/data-table';
import SignalGraph from '@/components/ui-signal-graph/signal-graph';

export default function ChartPage() {
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

    return (
        <div className="flex-grow flex flex-col p-4 space-y-4">
            <div className="flex-1 min-h-[400px] border rounded-lg bg-white p-4">
                <SignalGraph data={signalData} />
            </div>

            <div className="h-[400px] overflow-auto">
                <SignalTable rowCount={7} data={signalData} />
            </div>
        </div>
    );
}
