import Image from 'next/image';
import { PageHeader } from '@/components/page-header';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Metadata } from 'next';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
};

const teamMembers = [
  { name: 'Asad Effendi', role: 'Founder and President @Secure Networks' },
  { name: 'Aadil Memon', role: 'OT Security Practitioner' },
  { name: 'Muhammad Israr Khan', role: 'Deputy Manager OT Security' },
];

const objectives = [
  "Foster a collaborative national community.",
  "Promote awareness of OT/ICS security challenges.",
  "Share best practices and knowledge.",
  "Organize events, webinars, and training sessions.",
  "Bridge the gap between IT and OT professionals."
];

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        title="About OTSecPro Pakistan"
        subtitle="Our mission is to build a resilient and secure industrial ecosystem in Pakistan through collaboration, knowledge sharing, and professional development."
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image src={PlaceHolderImages[4].imageUrl} alt="Industrial security operations center" data-ai-hint="industrial security" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Our Vision</h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                To be the leading platform for OT/ICS cybersecurity excellence in Pakistan, empowering professionals and organizations to defend against emerging threats and ensure the safety and reliability of critical national infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight">Our Core Objectives</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {objectives.map((objective, index) => (
              <Card key={index} className="flex items-start p-6 shadow-sm">
                <CheckCircle className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                <p className="text-base text-foreground">{objective}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight">Meet the Team</h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Our organization is led by a dedicated team of experienced OT cybersecurity professionals.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center p-6 shadow-lg">
                <Avatar className="h-24 w-24 mx-auto mb-4">
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-primary">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
