'use client';

import Link from 'next/link';
import { ShieldCheck, Twitter, Linkedin, Facebook } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center space-x-2">
              <ShieldCheck className="h-6 w-6 text-primary" />
              <span className="font-bold">OTSecPro Pakistan</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Fostering a national community for OT/ICS cybersecurity professionals in Pakistan.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link href="/events" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Events</Link></li>
              <li><Link href="/knowledge-hub" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Knowledge Hub</Link></li>
              <li><Link href="/community" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Community</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li><Link href="/join" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Become a Member</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Twitter"><Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" /></Link>
              <Link href="#" aria-label="LinkedIn"><Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" /></Link>
              <Link href="#" aria-label="Facebook"><Facebook className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          © {year} OTSecPro Pakistan. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
