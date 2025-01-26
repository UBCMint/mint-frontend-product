import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';

export default function SelectionView() {
    return (
        <div className="h-screen p-6">
            <Card className="h-full">
                <CardHeader>
                    <CardTitle>Nodes</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Content here</p>
                </CardContent>
            </Card>
        </div>
    );
}
