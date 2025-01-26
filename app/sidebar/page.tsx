import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Cross1 from '@/components/radix/cross1';

export default function SelectionSidebar() {
    return (
        <div className="h-screen p-6 w-80">
            <Card className="h-full">
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Nodes</CardTitle>
                    <Cross1 />
                </CardHeader>
                <CardContent>
                    <p>Content goes here</p>
                </CardContent>
            </Card>
        </div>
    );
}
