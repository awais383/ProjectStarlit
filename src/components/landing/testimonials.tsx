import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Sarah L.',
    role: 'Founder, TechStart',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    text: "Momentum AI has been a game-changer for our startup. The personalized coaching helped us identify blind spots and the progress tracking kept us motivated. We've seen a 40% increase in productivity!",
  },
  {
    name: 'Michael B.',
    role: 'E-commerce Entrepreneur',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026705d',
    text: "As a solo-preneur, it's like having a business coach in my pocket 24/7. The AI chat is incredibly insightful for quick questions and brainstorming new strategies. Highly recommended.",
  },
  {
    name: 'Elena R.',
    role: 'Creative Agency Director',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026706d',
    text: "The goal-setting feature is phenomenal. It helped our team align on key objectives and the AI's ability to break them down into manageable tasks was invaluable. Our project delivery times have improved significantly.",
  },
];

export function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-headline font-bold tracking-tighter md:text-4xl/tight">
            What Our Users Say
          </h2>
          <p className="mx-auto max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Discover how professionals are accelerating their growth with Momentum AI.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 pt-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="text-left">
              <CardContent className="p-6">
                <p className="text-foreground/90">"{testimonial.text}"</p>
              </CardContent>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
