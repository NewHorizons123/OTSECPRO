
'use client';
import { useState, useMemo } from 'react';
import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import AttackData from '@/lib/ics-attack-timeline.json';
import type { Metadata } from 'next';

type Attack = {
  name: string;
  year: number;
  decade: string;
  industry: string;
  target: string;
  method: string;
  impact: string;
};

// This would normally be in a separate file, but for simplicity we define it here
// export const metadata: Metadata = {
//   title: 'ICS Attack Timeline',
// };

export default function IcsAttackTimelinePage() {
  const [attacks] = useState<Attack[]>(AttackData.attacks);
  const [filteredAttacks, setFilteredAttacks] = useState<Attack[]>(attacks);
  const [selectedDecade, setSelectedDecade] = useState('All');
  const [selectedIndustry, setSelectedIndustry] = useState('All');

  const decades = useMemo(() => ['All', ...Array.from(new Set(attacks.map(a => a.decade)))], [attacks]);
  const industries = useMemo(() => ['All', ...Array.from(new Set(attacks.map(a => a.industry)))], [attacks]);

  useMemo(() => {
    let currentAttacks = [...attacks];

    if (selectedDecade !== 'All') {
      currentAttacks = currentAttacks.filter(attack => attack.decade === selectedDecade);
    }

    if (selectedIndustry !== 'All') {
      currentAttacks = currentAttacks.filter(attack => attack.industry === selectedIndustry);
    }

    setFilteredAttacks(currentAttacks.sort((a, b) => a.year - b.year));
  }, [selectedDecade, selectedIndustry, attacks]);

  return (
    <div>
      <PageHeader
        title="Industrial Cyber Attacks: 1990-2025"
        subtitle="Explore the most significant cyber attacks in history that shaped our digital security landscape"
      />
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <Card className="p-6 mb-12 bg-muted">
            <h3 className="text-lg font-semibold mb-4">Filters & Timeline</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Select value={selectedDecade} onValueChange={setSelectedDecade}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Filter by Decade" />
                </SelectTrigger>
                <SelectContent>
                  {decades.map(decade => <SelectItem key={decade} value={decade}>{decade}</SelectItem>)}
                </SelectContent>
              </Select>
              <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Filter by Industry" />
                </SelectTrigger>
                <SelectContent>
                  {industries.map(industry => <SelectItem key={industry} value={industry}>{industry}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAttacks.map(attack => (
              <Card key={`${attack.name}-${attack.year}`} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{attack.name}</CardTitle>
                    <Badge variant="secondary">{attack.year}</Badge>
                  </div>
                  <CardDescription className="flex flex-wrap gap-2 pt-2">
                    <Badge variant="outline">{attack.decade}</Badge>
                    <Badge variant="default" className="bg-primary/80">{attack.industry}</Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm">Target</h4>
                    <p className="text-muted-foreground text-sm">{attack.target}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Method</h4>
                    <p className="text-muted-foreground text-sm">{attack.method}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Immediate Impact</h4>
                    <p className="text-muted-foreground text-sm">{attack.impact}</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Read Full Details</Button>
                </CardFooter>
              </Card>
            ))}
             {filteredAttacks.length === 0 && (
                <div className="text-center py-16 col-span-full">
                    <p className="text-lg text-muted-foreground">No attacks found matching your criteria.</p>
                </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
