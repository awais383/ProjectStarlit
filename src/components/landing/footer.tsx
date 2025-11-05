import Link from 'next/link';
import { Logo } from '@/components/logo';

const footerLinks = {
  Product: [
    { name: 'Features', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Integrations', href: '#' },
  ],
  Company: [
    { name: 'About Us', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Contact', href: '#' },
  ],
  Resources: [
    { name: 'Blog', href: '#' },
    { name: 'Help Center', href: '#' },
    { name: 'Privacy Policy', href: '#' },
  ],
};

function SocialIcon({ href, children }: { href: string, children: React.ReactNode }) {
    return (
        <Link href={href} className="text-muted-foreground hover:text-foreground">
            {children}
        </Link>
    )
}

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t">
      <div className="container py-12 px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-5">
          <div className="md:col-span-2 space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground max-w-xs">
              Your AI-powered companion for sustainable business growth and peak performance.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-2">
              <h4 className="font-semibold font-headline text-foreground">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 pt-8 border-t flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Momentum AI, Inc. All rights reserved.</p>
            <div className="flex items-center gap-4 mt-4 sm:mt-0">
                <SocialIcon href="#">
                    <TwitterIcon className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                </SocialIcon>
                <SocialIcon href="#">
                    <GithubIcon className="h-5 w-5" />
                    <span className="sr-only">Github</span>
                </SocialIcon>
                <SocialIcon href="#">
                    <LinkedinIcon className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                </SocialIcon>
            </div>
        </div>
      </div>
    </footer>
  );
}

// Icons
function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3.3 4.9 3 7.1 0 .8-.4 1.5-.9 1.9s-1.2.9-2.1.7c-1.3-.2-2.3-.5-3.2-.9s-1.8-.8-2.3-1.3c-2.2-2.1-3.6-4.5-4.2-6.9 0 0-.2 1.5-1.5 2.5s-3 1.5-3.5 1.5c-.5 0-1.1-.2-1.6-.5S3 14 3 13.5s.4-.9.8-1.3c.4-.4.9-.8 1.5-1.2s1.3-.8 2-1.3c.7-.5 1.3-1 1.8-1.7s.8-1.3.9-1.8c.1-.5.1-1.1-.2-1.6s-.8-.9-1.4-1.1c-.6-.2-1.2-.2-1.8.1s-1.1.6-1.5.9c-1.1 1.1-2 2.6-2.3 4.6" />
      </svg>
    )
  }
  
  function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.0-1.4-.5-2.8-1.5-3.5A.5.5 0 0 0 18 5c-.7-1.7-1.5-3.5-3-5C13.5 2 12 2 12 2s-1.5 0-3 1.5c-1.5 1.5-2.3 3.3-3 5a.5.5 0 0 0 .5 1c-1 1-1.5 2.1-1.5 3.5.0 3.5 3 5.5 6 5.5-1 1-1.5 2.5-1.5 3.5V22" />
      </svg>
    )
  }
  
  function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6_0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    )
  }
