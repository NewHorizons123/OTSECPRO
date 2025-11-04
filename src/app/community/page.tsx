import { PageHeader } from '@/components/page-header';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, Rss, Lock, Users } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'Community & Collaboration',
};

const forumCategories = [
  { title: "General Discussion", description: "Talk about anything related to OT/ICS.", icon: MessageSquare },
  { title: "Latest Threats & Vulnerabilities", description: "Share and discuss emerging threats.", icon: Rss },
  { title: "Technical Deep-Dives", description: "In-depth technical discussions.", icon: Lock },
  { title: "Career & Growth", description: "Job postings, career advice, and more.", icon: Users },
];

export default function CommunityPage() {
  return (
    <div>
      <PageHeader
        title="Community & Collaboration"
        subtitle="Engage with peers, ask questions, and share your expertise. Our forums are the heart of the OTSecPro community."
      />
      
      <div className="relative h-64 md:h-80 w-full">
        <Image src={PlaceHolderImages[8].imageUrl} alt={PlaceHolderImages[8].description} data-ai-hint={PlaceHolderImages[8].imageHint} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <Card className="p-8 text-center bg-primary/10 border-primary/20">
            <h2 className="text-2xl font-bold text-primary">Member-only Access</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
              Our community forums are an exclusive benefit for registered members. Sign up today to join the conversation.
            </p>
            <Button asChild className="mt-6">
              <Link href="/join">Join or Sign In</Link>
            </Button>
          </Card>

          <div className="mt-16">
            <h3 className="text-2xl font-bold tracking-tight text-center mb-12">Forum Categories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {forumCategories.map(category => (
                <Card key={category.title} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <category.icon className="h-8 w-8 text-primary" />
                    <div>
                      <CardTitle>{category.title}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
