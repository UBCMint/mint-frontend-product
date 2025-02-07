import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Cross1 from '@/components/radix/cross1';
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from '@/components/ui/resizable';
import RecentButton from '@/components/ui/recent-button';
import { Input } from "@/components/ui/input";

export default function SelectionSidebar() {
    return (
        <ResizablePanelGroup
            direction="horizontal"
            className="min-h-screen p-6"
        >
            <ResizablePanel className="min-h-full min-w-fit" defaultSize={1}>
                <Card className="h-full min-w-fit">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle>Nodes</CardTitle>
                        <Cross1 />
                    </CardHeader>
                    <CardContent>
                        <Input type="search" placeholder="Search" className="pl-10" />
                        <div>
                            <RecentButton
                                label="Node Name"
                                description="Node Description Lorem Ipsum dolor sitamet Node Description Lorem Ipsum dolor sitamet"
                            />
                            <RecentButton
                                label="Node Name"
                                description="Node Description Lorem Ipsum dolor sitamet Node Description Lorem Ipsum dolor sitamet"
                            />
                        </div>
                    </CardContent>
                </Card>
            </ResizablePanel>
            <ResizableHandle withHandle className="bg-border-none" />
            <ResizablePanel defaultSize={99} />
        </ResizablePanelGroup>
    );
}
