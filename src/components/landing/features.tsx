import { BarChart, Bot, Goal, Zap } from 'lucide-react';

const features = [
  {
    icon: <Bot className="w-8 h-8 text-primary" />,
    title: 'Personalized Coaching',
    description: 'AI-powered recommendations tailored to your business, goals, and learning style.',
  },
  {
    icon: <BarChart className="w-8 h-8 text-primary" />,
    title: 'Progress Tracking',
    description: 'Visualize your momentum with intuitive charts and graphs. Make effective decisions to stay on track.',
  },
  {
    icon: <Goal className="w-8 h-8 text-primary" />,
    title: 'Dynamic Goal Setting',
    description: 'Set and manage SMART goals. Our AI helps you break them down into actionable steps.',
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: 'AI Chat Assistance',
    description: 'Get instant answers, coaching guidance, and content summaries from your AI companion.',
  },
];

export function Features() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">
              Core Features
            </div>
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">
              Everything You Need to Succeed
            </h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform is designed to provide you with a comprehensive toolkit for business growth, powered by cutting-edge AI.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-12 py-12 lg:grid-cols-2 lg:gap-16">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">{feature.icon}</div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold font-headline">{feature.title}</h3>
                <p className="text-sm text-foreground/80">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
