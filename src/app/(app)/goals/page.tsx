import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function GoalsPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold font-headline tracking-tight mb-4">Goals</h1>
            <Card>
                <CardHeader>
                    <CardTitle>Goal Setting</CardTitle>
                    <CardDescription>This is where users will set and manage their goals.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Feature under development.</p>
                </CardContent>
            </Card>
        </div>
    );
}
