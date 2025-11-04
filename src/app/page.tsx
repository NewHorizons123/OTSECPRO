import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight, Calendar, Users } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const featuredEvents = [
  { id: 1, title: 'Annual OT Security Summit 2024', date: 'October 26-28, 2024', location: 'Islamabad', image: PlaceHolderImages[0] },
  { id: 2, title: 'Webinar: Securing Industrial Control Systems', date: 'November 15, 2024', location: 'Online', image: PlaceHolderImages[1] },
];

const latestArticles = [
  { id: 1, title: 'The Rise of Ransomware in OT Environments', excerpt: 'An in-depth look at the growing threat of ransomware targeting industrial systems...', image: PlaceHolderImages[2] },
  { id: 2, title: 'Best Practices for Network Segmentation', excerpt: 'Learn how to effectively segment your OT network to mitigate risks and improve security.', image: PlaceHolderImages[3] },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full py-32 md:py-48 flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#006633] to-white"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 p-4 container">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary-foreground drop-shadow-md">
            Securing Pakistan's Industrial Future
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-primary-foreground/90 drop-shadow-sm">
            The national community for OT/ICS cybersecurity professionals and industrial automation engineers.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/join">Join Our Community</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-primary">Who We Are</h2>
              <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
                OTSecPro Pakistan is dedicated to advancing the field of Operational Technology (OT) and Industrial Control Systems (ICS) cybersecurity across the nation. We are a community-driven platform for professionals to connect, learn, and collaborate.
              </p>
              <Button asChild className="mt-6">
                <Link href="/about">Discover Our Mission <ArrowRight className="ml-2" /></Link>
              </Button>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg group">
              <Image src={PlaceHolderImages[4].imageUrl} alt={PlaceHolderImages[4].description} data-ai-hint={PlaceHolderImages[4].imageHint} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight">Upcoming Events & Webinars</h2>
            <p className="mt-2 text-muted-foreground text-lg">
              Join our events to stay updated with the latest trends and technologies in OT/ICS security.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {featuredEvents.map(event => (
              <Card key={event.id} className="overflow-hidden group shadow-md hover:shadow-xl transition-shadow">
                <div className="relative h-56">
                  <Image src={event.image.imageUrl} alt={event.image.description} data-ai-hint={event.image.imageHint} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <CardHeader>
                  <CardTitle className="leading-tight">{event.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2 pt-2">
                    <Calendar className="w-4 h-4" /> {event.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline">
                    <Link href={`/events#${event.id}`}>View Details <ArrowRight className="ml-2" /></Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/events">See All Events</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Knowledge Hub Preview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight">From the Knowledge Hub</h2>
            <p className="mt-2 text-muted-foreground text-lg">
              Explore our curated library of articles, white papers, and best practices.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {latestArticles.map(article => (
              <Card key={article.id} className="group flex flex-col shadow-md hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="leading-tight">{article.title}</CardTitle>
                  <CardDescription className="pt-2">{article.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex items-end">
                  <Button asChild variant="link" className="p-0 text-primary">
                    <Link href={`/knowledge-hub#${article.id}`}>Read More <ArrowRight className="ml-2" /></Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/knowledge-hub">Explore Knowledge Hub</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground">
        <div className="container py-16 md:py-24 text-center">
          <Users className="mx-auto h-12 w-12 mb-4" />
          <h2 className="text-3xl font-bold tracking-tight">Join a Thriving Community</h2>
          <p className="mt-2 max-w-2xl mx-auto">
            Become a member of OTSecPro Pakistan to access exclusive resources, network with peers, and contribute to the nation's cybersecurity resilience.
          </p>
          <Button size="lg" variant="secondary" className="mt-8" asChild>
            <Link href="/join">Register Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
