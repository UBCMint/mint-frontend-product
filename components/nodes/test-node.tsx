import { Handle, Position } from '@xyflow/react';

export default function TestNode() {
    return (
        <>
            <Handle type="target" position={Position.Left} />
            <Handle type="source" position={Position.Right} />
            <div className="font-bold text-center">Test Node</div>
        </>
    );
}
