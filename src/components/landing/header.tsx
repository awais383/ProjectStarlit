'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-transparent backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
      <Logo />
      <nav className="ml-auto flex items-center gap-4 sm:gap-6">
        <Button variant="ghost" asChild>
          <Link href="/login">Login</Link>
        </Button>
        <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link href="/signup">Get Started</Link>
        </Button>
      </nav>
    </header>
  );
}
