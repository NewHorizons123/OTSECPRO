import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import { KnowledgeHubSearch } from '@/components/knowledge-hub-search';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Knowledge Hub',
};

const articles = [
  { id: 1, title: "The Purdue Model Explained", category: "Frameworks", image: PlaceHolderImages[2] },
  { id: 2, title: "Securing PLCs in a Hostile Environment", category: "Hardware Security", image: PlaceHolderImages[3] },
  { id: 3, title: "Incident Response for OT Systems", category: "Operations", image: PlaceHolderImages[0] },
  { id: 4, title: "A Guide to IEC 62443", category: "Standards", image: PlaceHolderImages[1] },
];

export default function KnowledgeHubPage() {
  return (
    <div>
      <PageHeader
        title="Knowledge Hub"
        subtitle="Your central repository for cybersecurity resources, articles, and best practices in OT/ICS environments. Use our AI-powered search to find what you need."
      />
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <KnowledgeHubSearch />
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold tracking-tight text-center mb-12">Featured Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articles.map(article => (
                <Card key={article.id} className="group shadow-md hover:shadow-xl transition-shadow overflow-hidden flex flex-col md:flex-row">
                  <div className="relative h-48 md:h-auto md:w-1/3 flex-shrink-0">
                    <Image src={article.image.imageUrl} alt={article.title} data-ai-hint={article.image.imageHint} fill className="object-cover" />
                  </div>
                  <div className="flex flex-col flex-grow">
                    <CardHeader>
                      <Badge variant="secondary" className="w-fit mb-2">{article.category}</Badge>
                      <CardTitle>{article.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground text-sm">A deep-dive into the critical aspects of {article.title.toLowerCase()}.</p>
                    </CardContent>
                    <div className="p-6 pt-0">
                      <Link href={`/knowledge-hub#${article.id}`} className="text-primary font-semibold flex items-center group-hover:underline">
                        Read Article <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
