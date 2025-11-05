import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function CallToAction() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Build Your Momentum?
            </h2>
            <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl">
              Join today and start your journey towards accelerated business growth. Your AI companion is waiting.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/signup">Start Your Free Trial</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
