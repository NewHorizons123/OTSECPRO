'use client';
import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Calendar, Clock, MapPin, Globe } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const upcomingEvents = [
  { id: 1, title: 'Annual OT Security Summit 2024', date: '2024-10-26', time: '9:00 AM - 5:00 PM', location: 'Islamabad', type: 'In-Person', image: PlaceHolderImages[0] },
  { id: 2, title: 'Webinar: Securing Industrial Control Systems', date: '2024-11-15', time: '2:00 PM - 3:30 PM', location: 'Online', type: 'Webinar', image: PlaceHolderImages[1] },
];

const pastEvents = [
    { id: 3, title: 'Workshop on IEC 62443', date: '2024-07-10', time: '10:00 AM - 4:00 PM', location: 'Lahore', type: 'In-Person', image: PlaceHolderImages[2] },
    { id: 4, title: 'Webinar: Intro to OT Cybersecurity', date: '2024-06-05', time: '3:00 PM - 4:00 PM', location: 'Online', type: 'Webinar', image: PlaceHolderImages[3] },
];

function EventCard({ event }: { event: (typeof upcomingEvents)[0] }) {
  const [isUpcoming, setIsUpcoming] = useState(false);

  useEffect(() => {
    // Set the time to the end of the day to ensure today's events are considered upcoming
    const eventDate = new Date(event.date);
    eventDate.setHours(23, 59, 59, 999);
    setIsUpcoming(eventDate > new Date());
  }, [event.date]);

  const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Card className="flex flex-col shadow-lg hover:shadow-xl transition-shadow" id={String(event.id)}>
      <div className="relative h-56 overflow-hidden rounded-t-lg">
        <Image src={event.image.imageUrl} alt={event.title} data-ai-hint={event.image.imageHint} fill className="object-cover" />
      </div>
      <CardHeader>
        <CardTitle>{event.title}</CardTitle>
        <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
            {event.type === 'Webinar' ? <Globe className="h-4 w-4 text-primary" /> : <MapPin className="h-4 w-4 text-primary" />}
            <span>{event.location}</span>
        </div>
      </CardHeader>
      <CardContent className="flex-grow space-y-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{formattedDate}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{event.time}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          {isUpcoming ? 'Register Now' : 'View Recording'}
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function EventsPage() {
  return (
    <div>
      <PageHeader
        title="Events & Webinars"
        subtitle="Connect with peers, learn from experts, and stay ahead of the curve in OT/ICS cybersecurity."
      />
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <Tabs defaultValue="upcoming">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
            </TabsList>
            <TabsContent value="upcoming">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcomingEvents.length > 0 ? (
                    upcomingEvents.map((event) => <EventCard key={event.id} event={event} />)
                ) : (
                    <p className="text-muted-foreground col-span-full text-center">No upcoming events. Check back soon!</p>
                )}
              </div>
            </TabsContent>
            <TabsContent value="past">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pastEvents.map((event) => <EventCard key={event.id} event={event} />)}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
