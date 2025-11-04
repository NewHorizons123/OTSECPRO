import { AuthForm } from '@/components/auth-form';
import { PageHeader } from '@/components/page-header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Join Us',
};

export default function JoinPage() {
  return (
    <div>
      <PageHeader
        title="Become a Member"
        subtitle="Create an account or log in to access exclusive content, register for events, and engage with the community."
      />
      <div className="container py-16 md:py-24 flex justify-center">
        <AuthForm />
      </div>
    </div>
  );
}
