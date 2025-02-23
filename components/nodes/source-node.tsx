import { Handle, Position } from '@xyflow/react';

export default function SourceNode() {
    return (
        <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-stone-400">
            <Handle type="source" position={Position.Bottom} />
            <div className="font-bold">Source</div>
        </div>
    );
}
