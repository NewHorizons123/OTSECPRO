
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, ShieldCheck, ChevronDown } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/community', label: 'Community' },
  { href: '/knowledge-hub', label: 'Knowledge Hub' },
  { href: '/events', label: 'Events' },
  {
    label: 'Resources',
    items: [
      { href: '/glossary', label: 'Glossary' },
      { href: '/ics-attack-timeline', label: 'ICS Attack Timeline' },
      { href: '/resources/iec-62443', label: 'IEC 62443 Brief' },
    ],
  },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isLinkActive = (href: string) => pathname === href;
  const isDropdownActive = (items: { href: string }[]) => items.some(item => isLinkActive(item.href));

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        {/* Desktop Nav */}
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <ShieldCheck className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block">OTSecPro Pakistan</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              'items' in link ? (
                <DropdownMenu key={link.label}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className={cn(
                        'transition-colors hover:text-foreground/80 flex items-center gap-1 p-0 h-auto',
                        isDropdownActive(link.items) ? 'text-foreground font-semibold' : 'text-foreground/60'
                      )}
                    >
                      {link.label}
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {link.items.map(item => (
                      <DropdownMenuItem key={item.href} asChild>
                        <Link href={item.href}>{item.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  className={cn(
                    'transition-colors hover:text-foreground/80',
                    isLinkActive(link.href!) ? 'text-foreground font-semibold' : 'text-foreground/60'
                  )}
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>
        </div>
        
        {/* Mobile Nav */}
        <div className="flex items-center md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0 pt-10">
              <Link href="/" className="flex items-center space-x-2 mb-8 px-4" onClick={() => setIsMobileMenuOpen(false)}>
                <ShieldCheck className="h-6 w-6 text-primary" />
                <span className="font-bold">OTSecPro Pakistan</span>
              </Link>
              <div className="flex flex-col space-y-2 px-4">
                {navLinks.map((link) => (
                   'items' in link ? (
                    <div key={link.label} className="flex flex-col space-y-1">
                       <span className="text-foreground/70 font-semibold p-2">{link.label}</span>
                       {link.items.map(item => (
                         <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                             className={cn(
                              'transition-colors hover:text-primary p-2 rounded-md pl-6',
                              pathname === item.href ? 'bg-muted text-primary font-semibold' : 'text-foreground/70'
                            )}
                          >
                           {item.label}
                         </Link>
                       ))}
                    </div>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href!}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        'transition-colors hover:text-primary p-2 rounded-md',
                        pathname === link.href ? 'bg-muted text-primary font-semibold' : 'text-foreground/70'
                      )}
                    >
                      {link.label}
                    </Link>
                  )
                ))}
              </div>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center space-x-2">
            <ShieldCheck className="h-6 w-6 text-primary" />
            <span className="font-bold text-sm">OTSecPro.pk</span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button variant="outline" asChild>
            <Link href="/contact">Contact</Link>
          </Button>
          <Button asChild>
            <Link href="/join">Join Us</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
