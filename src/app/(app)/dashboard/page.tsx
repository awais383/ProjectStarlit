import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card';
  import { BarChart, Goal, Bot, Activity } from 'lucide-react';
  
  export default function DashboardPage() {
    return (
      <div className="flex flex-col">
        <header className="mb-8">
            <h1 className="text-3xl font-bold font-headline tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back! Here's a snapshot of your momentum.</p>
        </header>
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Goals</CardTitle>
              <Goal className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">
                +2 since last week
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Progress Score
              </CardTitle>
              <BarChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">82%</div>
              <p className="text-xs text-muted-foreground">
                Trending up by 5.2%
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">AI Insights</CardTitle>
              <Bot className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5 New</div>
              <p className="text-xs text-muted-foreground">
                Personalized recommendations available
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Activity Streak</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">14 Days</div>
              <p className="text-xs text-muted-foreground">
                Keep up the great work!
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="mt-8">
            <Card>
                <CardHeader>
                    <CardTitle>Your Next Step</CardTitle>
                    <CardDescription>AI-powered recommendation to keep your momentum.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="font-semibold">Review Q2 Marketing Strategy</p>
                    <p className="text-sm text-muted-foreground mt-1">Based on your recent progress, focusing on market penetration could yield significant results. Let's break it down.</p>
                </CardContent>
            </Card>
        </div>
      </div>
    );
  }
  