import { PageHeader } from '@/components/page-header';
import { ContactForm } from '@/components/contact-form';
import { Mail, Phone, MapPin } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
};

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        title="Get in Touch"
        subtitle="We'd love to hear from you. Whether you have a question about our community, events, or anything else, our team is ready to answer all your questions."
      />
      <section className="py-16 md:py-24 bg-background">
        <div className="container grid md:grid-cols-2 gap-16">
          <div className="bg-muted p-8 rounded-lg">
            <h2 className="text-2xl font-bold tracking-tight mb-6">Contact Form</h2>
            <ContactForm />
          </div>
          <div className="space-y-8 py-8">
            <h2 className="text-2xl font-bold tracking-tight">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Our Office</h3>
                  <p className="text-muted-foreground">123 Industrial Zone, Karachi, Pakistan</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email Us</h3>
                  <p className="text-muted-foreground">contact@otsecpro.pk</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Call Us</h3>
                  <p className="text-muted-foreground">+92 300 1234567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
