import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Cross1 from '@/components/radix/cross1';
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"

export default function SelectionSidebar() {
    return (
            <ResizablePanelGroup direction="horizontal" className="min-h-screen p-6">
                <ResizablePanel className='min-h-full min-w-fit' defaultSize={1}>
                    <Card className="h-full min-w-fit">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle>Nodes</CardTitle>
                            <Cross1 />
                        </CardHeader>
                        <CardContent>
                            <p>Content goes here</p>
                        </CardContent>
                    </Card>
                </ResizablePanel>
                <ResizableHandle withHandle className='bg-border-none'/>
                <ResizablePanel defaultSize={99}/>
            </ResizablePanelGroup>
    );
}
