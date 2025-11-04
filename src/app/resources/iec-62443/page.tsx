
import { PageHeader } from '@/components/page-header';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, CheckCircle, FileText, BarChart, HardHat, ShieldCheck, Play, RefreshCw, Contact } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'IEC 62443 Brief',
};

const tiers = [
  {
    title: "Tier 1: General",
    description: "Covers fundamental concepts, terminology, and models for industrial automation and control systems security.",
    documents: [
      { id: "1-1", type: "Standard", status: "Published", title: "IEC 62443-1-1: Terminology, concepts and models", description: "Establishes the core terminology and concepts used throughout the IEC 62443 series. Provides the foundation for understanding industrial cybersecurity principles." },
      { id: "1-2", type: "TR", status: "Published", title: "IEC 62443-1-2: Master glossary of terms and abbreviations", description: "Comprehensive glossary that standardizes terminology across all parts of the IEC 62443 series, ensuring consistent interpretation and application." },
      { id: "1-3", type: "TR", status: "In Development", title: "IEC 62443-1-3: Performance metrics for IACS security", description: "Defines metrics for measuring the performance of security controls in industrial automation and control systems. Provides a framework for evaluating security effectiveness." },
      { id: "1-4", type: "TR", status: "Published", title: "IEC 62443-1-4: IACS security lifecycle and use-cases", description: "Describes the security lifecycle for industrial automation and control systems. Provides practical use cases to illustrate security concepts and implementation approaches." },
      { id: "1-5", type: "TR", status: "In Development", title: "IEC 62443-1-5: Scheme for IEC 62443 Cyber Security Profiles", description: "Establishes a framework for creating cybersecurity profiles based on the IEC 62443 standard. Enables industry-specific adaptations of the standard." },
      { id: "1-6", type: "TR", status: "In Development", title: "IEC 62443-1-6: Application of the ISA/IEC 62443 standards to the ICT", description: "Provides guidance on applying IEC 62443 standards to Information and Communication Technology (ICT) systems that interact with industrial control systems." },
    ]
  },
  {
    title: "Tier 2: Policies & Procedures",
    description: "Addresses organizational security policies and procedures for industrial automation and control systems.",
    documents: [
        { id: "2-1", type: "Standard", status: "Published", title: "IEC 62443-2-1: Security program requirements for IACS asset owners", description: "Defines requirements for establishing and maintaining an effective cybersecurity management system for industrial automation and control systems. Focuses on organizational aspects of security." },
        { id: "2-2", type: "PAS", status: "Published", title: "IEC 62443-2-2: IACS Security Protection Rating", description: "Provides a methodology for rating the security protection capabilities of industrial automation and control systems. Helps organizations assess their security posture." },
        { id: "2-3", type: "TR", status: "Published", title: "IEC 62443-2-3: Patch management in the IACS environment", description: "Provides guidance on establishing and operating a patch management program for industrial automation and control systems. Addresses the unique challenges of patching operational technology." },
        { id: "2-4", type: "Standard", status: "Published", title: "IEC 62443-2-4: Security program requirements for IACS service providers", description: "Specifies requirements for security programs of service providers that perform integration, maintenance, or other services for industrial automation and control systems." },
        { id: "2-5", type: "TR", status: "In Development", title: "IEC 62443-2-5: Implementation guidance for IACS asset owners", description: "Provides practical guidance for asset owners on implementing security controls in industrial environments. Includes best practices and implementation considerations." },
    ]
  },
  {
    title: "Tier 3: System",
    description: "Focuses on system-level security requirements and security assurance levels for industrial control systems.",
    documents: [
        { id: "3-1", type: "TR", status: "In Development", title: "IEC 62443-3-1: Security technologies for IACS", description: "Provides an overview of security technologies applicable to industrial automation and control systems. Includes guidance on selecting appropriate technologies for different environments." },
        { id: "3-2", type: "Standard", status: "Published", title: "IEC 62443-3-2: Security Risk Assessment for System Design", description: "Establishes requirements for assessing cybersecurity risk for industrial automation and control systems. Provides a methodology for determining appropriate security levels for zones and conduits." },
        { id: "3-3", type: "Standard", status: "Published", title: "IEC 62443-3-3: System security requirements and security levels", description: "Defines system security requirements and security levels for industrial automation and control systems. Provides a framework for specifying security capabilities required for a given security level." },
    ]
  },
  {
    title: "Tier 4: Component/Product",
    description: "Addresses security requirements for components and development processes in industrial control systems.",
    documents: [
        { id: "4-1", type: "Standard", status: "Published", title: "IEC 62443-4-1: Secure Product Development Lifecycle Requirements", description: "Specifies process requirements for the secure development of products used in industrial automation and control systems. Defines a secure development lifecycle for control system components." },
        { id: "4-2", type: "Standard", status: "Published", title: "IEC 62443-4-2: Technical security requirements for IACS components", description: "Provides detailed technical security requirements for components used in industrial automation and control systems. Categorizes components and specifies requirements for each category." },
    ]
  },
  {
    title: "Tier 5: Profiles",
    description: "Provides industry-specific security profiles and implementation guidance for different sectors.",
    documents: [
        { id: "5-x", type: "TS", status: "In Development", title: "IEC 62443-5-x: Industry-Specific Profiles", description: "Series of documents providing industry-specific security profiles based on the IEC 62443 framework. Tailors security requirements to specific industrial sectors and applications." },
        { id: "Profile X", type: "TS", status: "In Development", title: "Sector-Specific Implementation", description: "Placeholder for future industry-specific security profiles. Will provide detailed implementation guidance for particular industrial sectors." },
    ]
  },
  {
    title: "Tier 6: Evaluation & Conformance",
    description: "Provides methodologies for evaluating compliance with the IEC 62443 standard and certification frameworks.",
    documents: [
        { id: "6-1", type: "TR", status: "Published", title: "IEC 62443-6-1: Security Evaluation Methodology for IEC 62443-2-4", description: "Provides a methodology for evaluating compliance with the requirements specified in IEC 62443-2-4 for service providers. Establishes criteria for assessing service provider security programs." },
        { id: "6-2", type: "TR", status: "Published", title: "IEC 62443-6-2: Security Evaluation Methodology for IEC 62443-4-2", description: "Establishes a methodology for evaluating compliance with the technical security requirements for components specified in IEC 62443-4-2. Provides a framework for component certification." },
    ]
  }
];

const benefits = [
    { title: "Enhanced Security Posture", description: "Comprehensive protection against cyber threats targeting industrial systems.", items: ["Multi-layered defense approach", "Risk-based security controls", "Threat-specific countermeasures", "Continuous security monitoring"] },
    { title: "Regulatory Compliance", description: "Meet industry standards and regulatory requirements." },
    { title: "Business Continuity", description: "Protect operational availability and business processes." },
    { title: "System Integration", description: "Seamless integration with existing industrial infrastructure." }
];


export default function Iec62443Page() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published': return 'bg-green-100 text-green-800 border-green-200';
      case 'Under Revision': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'In Development': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div>
      <PageHeader
        title="IEC 62443"
        subtitle="Comprehensive cybersecurity framework for industrial automation and control systems"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center mb-16">
            <Card><CardHeader className='items-center'><ShieldCheck className="h-8 w-8 text-primary" /><p className="font-bold">Industrial Security</p></CardHeader></Card>
            <Card><CardHeader className='items-center'><FileText className="h-8 w-8 text-primary" /><p className="font-bold">Cybersecurity Framework</p></CardHeader></Card>
            <Card><CardHeader className='items-center'><HardHat className="h-8 w-8 text-primary" /><p className="font-bold">OT Protection</p></CardHeader></Card>
            <Card><CardHeader className='items-center'><BarChart className="h-8 w-8 text-primary" /><p className="font-bold">Risk Management</p></CardHeader></Card>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight">Framework Overview</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The IEC 62443 series provides a comprehensive, flexible framework to address and mitigate current and future security vulnerabilities in industrial automation and control systems (IACS).
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto mt-12">
            {tiers.map(tier => (
              <AccordionItem key={tier.title} value={tier.title}>
                <AccordionTrigger className="text-xl font-semibold">{tier.title} ({tier.documents.length} Docs)</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground mb-6">{tier.description}</p>
                  <div className="space-y-4">
                    {tier.documents.map(doc => (
                      <Card key={doc.id}>
                        <CardHeader>
                          <div className="flex justify-between items-start gap-4">
                            <CardTitle className="text-lg">{doc.title}</CardTitle>
                            <div className="flex-shrink-0 flex gap-2">
                                <Badge variant="outline">{doc.type}</Badge>
                                <Badge className={getStatusColor(doc.status)}>{doc.status}</Badge>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{doc.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight">Implementation Lifecycle</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A systematic three-phase approach to building comprehensive industrial cybersecurity capabilities.
            </p>
          </div>
          <Tabs defaultValue="phase1" className="mt-12 max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="phase1">Phase 1: Assess</TabsTrigger>
              <TabsTrigger value="phase2">Phase 2: Implement</TabsTrigger>
              <TabsTrigger value="phase3">Phase 3: Maintain</TabsTrigger>
            </TabsList>
            <TabsContent value="phase1">
              <Card className="p-6">
                <CardTitle>Assess</CardTitle>
                <CardDescription className="mt-2 mb-4">Evaluate current security posture and identify risks to industrial control systems.</CardDescription>
                <p className="font-semibold">Key Activities:</p>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Inventory control systems and assets</li>
                  <li>Identify zones and conduits</li>
                  <li>Conduct risk assessment</li>
                  <li>Determine target security levels</li>
                </ul>
                <p className="font-semibold mt-4">Key Standards:</p>
                <div className="flex gap-2">
                    <Badge variant="secondary">IEC 62443-3-2</Badge>
                    <Badge variant="secondary">IEC 62443-1-1</Badge>
                </div>
              </Card>
            </TabsContent>
            <TabsContent value="phase2">
              <Card className="p-6">
                <CardTitle>Develop & Implement</CardTitle>
                <CardDescription className="mt-2 mb-4">Create and deploy security policies, procedures, and controls based on assessment results.</CardDescription>
                <p className="font-semibold">Key Activities:</p>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Design security architecture (zones & conduits)</li>
                  <li>Implement technical security controls</li>
                  <li>Develop security policies and procedures</li>
                  <li>Train personnel</li>
                </ul>
                 <p className="font-semibold mt-4">Key Standards:</p>
                <div className="flex gap-2">
                    <Badge variant="secondary">IEC 62443-2-1</Badge>
                    <Badge variant="secondary">IEC 62443-3-3</Badge>
                </div>
              </Card>
            </TabsContent>
            <TabsContent value="phase3">
              <Card className="p-6">
                <CardTitle>Maintain</CardTitle>
                <CardDescription className="mt-2 mb-4">Continuously monitor, maintain, and improve the security of industrial control systems.</CardDescription>
                <p className="font-semibold">Key Activities:</p>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Monitor for security events</li>
                  <li>Manage patches and vulnerabilities</li>
                  <li>Conduct regular security audits</li>
                  <li>Update incident response plans</li>
                </ul>
                 <p className="font-semibold mt-4">Key Standards:</p>
                <div className="flex gap-2">
                    <Badge variant="secondary">IEC 62443-2-3</Badge>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tight">Key Benefits</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Implementing IEC 62443 delivers comprehensive value across security, compliance, and business continuity dimensions.
                </p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map(benefit => (
                    <Card key={benefit.title}>
                        <CardHeader>
                            <CardTitle>{benefit.title}</CardTitle>
                            <CardDescription>{benefit.description}</CardDescription>
                        </CardHeader>
                        {benefit.items && <CardContent>
                            <ul className="space-y-2">
                                {benefit.items.map(item => <li key={item} className="flex items-start"><CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" /> <span className="text-muted-foreground">{item}</span></li>)}
                            </ul>
                        </CardContent>}
                    </Card>
                ))}
            </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="container py-16 md:py-24 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Ready to Secure Your Industrial Systems?</h2>
          <p className="mt-2 max-w-2xl mx-auto">
            Start your journey with the IEC 62443 framework and build robust cybersecurity for your industrial automation and control systems.
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
                <Link href="/join">Get Started Today</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link href="/contact">Contact Expert <Contact className="ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
