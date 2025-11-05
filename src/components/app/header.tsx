import Link from 'next/link';
import { UserNav } from '@/components/app/user-nav';
import { Logo } from '@/components/logo';
import { MainNav } from './main-nav';

export function AppHeader() {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 z-50">
      <Logo />
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <MainNav className="ml-6 hidden md:flex" />
        <div className="ml-auto flex-1 sm:flex-initial">
        </div>
        <UserNav />
      </div>
    </header>
  );
}
