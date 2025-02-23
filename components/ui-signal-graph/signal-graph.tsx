import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

interface SignalData {
    time: string;
    signal1: number;
    signal2: number;
    signal3: number;
    signal4: number;
    signal5: number;
}

interface SignalGraphProps {
    data: SignalData[];
}

const SignalGraph: React.FC<SignalGraphProps> = ({ data = [] }) => {
    return (
        <div className="w-full h-[400px] bg-white p-4">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis
                        dataKey="time"
                        scale="point"
                        tick={{ fontSize: 12 }}
                    />
                    <YAxis domain={[0, 100]} tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Legend
                        layout="vertical"
                        align="right"
                        verticalAlign="middle"
                    />
                    <Line
                        type="monotone"
                        dataKey="signal1"
                        stroke="#8884d8"
                        name="Signal 1"
                        dot={false}
                    />
                    <Line
                        type="monotone"
                        dataKey="signal2"
                        stroke="#82ca9d"
                        name="Signal 2"
                        dot={false}
                    />
                    <Line
                        type="monotone"
                        dataKey="signal3"
                        stroke="#ffc658"
                        name="Signal 3"
                        dot={false}
                    />
                    <Line
                        type="monotone"
                        dataKey="signal4"
                        stroke="#ff7300"
                        name="Signal 4"
                        dot={false}
                    />
                    <Line
                        type="monotone"
                        dataKey="signal5"
                        stroke="#0088fe"
                        name="Signal 5"
                        dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default SignalGraph;
