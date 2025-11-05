import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function ProgressPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold font-headline tracking-tight mb-4">Progress</h1>
            <Card>
                <CardHeader>
                    <CardTitle>Progress Tracking</CardTitle>
                    <CardDescription>This is where users will visualize their progress with charts and graphs.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Feature under development.</p>
                </CardContent>
            </Card>
        </div>
    );
}
