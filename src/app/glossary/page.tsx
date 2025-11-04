'use client';
import { useState, useEffect, useMemo } from 'react';
import { PageHeader } from '@/components/page-header';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Card, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileDown, Search, Award, ShieldCheck, CheckSquare, BookOpen } from 'lucide-react';
import GlossaryData from '@/lib/glossary-terms.json';
import type { Metadata } from 'next';
import { CardContent, CardTitle, CardDescription } from '@/components/ui/card';

type GlossaryTerm = {
  term: string;
  category: string;
  section: string;
  definition: string;
};

// This would normally be in a separate file, but for simplicity we define it here
// export const metadata: Metadata = {
//   title: 'OT Security Glossary',
// };

const alphabet = '∀ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export default function GlossaryPage() {
  const [terms] = useState<GlossaryTerm[]>(GlossaryData.terms);
  const [filteredTerms, setFilteredTerms] = useState<GlossaryTerm[]>(terms);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedLetter, setSelectedLetter] = useState('∀');

  const categories = useMemo(() => ['All Categories', ...Array.from(new Set(terms.map(t => t.category)))], [terms]);

  useEffect(() => {
    let currentTerms = [...terms];

    if (searchTerm) {
      currentTerms = currentTerms.filter(term =>
        term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
        term.definition.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== 'All Categories') {
      currentTerms = currentTerms.filter(term => term.category === selectedCategory);
    }

    if (selectedLetter !== '∀') {
      currentTerms = currentTerms.filter(term => term.term.toUpperCase().startsWith(selectedLetter));
    }

    setFilteredTerms(currentTerms);
  }, [searchTerm, selectedCategory, selectedLetter, terms]);

  return (
    <div>
      <PageHeader
        title="OT Security Glossary"
        subtitle="Comprehensive reference guide for Operational Technology security terminology, designed for cybersecurity professionals, engineers, and industry specialists."
      />

      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16">
            <Card>
              <CardHeader className="items-center justify-center">
                <BookOpen className="h-8 w-8 text-primary" />
                <p className="font-bold text-2xl">{terms.length} Terms</p>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="items-center justify-center">
                <Award className="h-8 w-8 text-primary" />
                <p className="font-bold text-2xl">Professional Grade</p>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="items-center justify-center">
                <ShieldCheck className="h-8 w-8 text-primary" />
                <p className="font-bold text-2xl">Industry Standard</p>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="items-center justify-center">
                <CheckSquare className="h-8 w-8 text-primary" />
                <p className="font-bold text-2xl">Expert Curated</p>
              </CardHeader>
            </Card>
          </div>

          <Card className="p-6 mb-8 bg-muted">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="md:col-span-2 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search terms, definitions, categories..."
                  className="pl-10 h-12"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button size="lg" className="h-12">
                <FileDown className="mr-2" />
                Export PDF
              </Button>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Category Filter" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(cat => <SelectItem key={cat} value={cat}>{cat}</SelectItem>)}
                </SelectContent>
              </Select>
              <div className="bg-background p-2 rounded-md flex flex-wrap gap-1 justify-center items-center">
                 {alphabet.map(letter => (
                  <Button
                    key={letter}
                    variant={selectedLetter === letter ? 'default' : 'ghost'}
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => setSelectedLetter(letter)}
                  >
                    {letter}
                  </Button>
                ))}
              </div>
            </div>
          </Card>

          <div className="text-muted-foreground mb-4">
            Showing {filteredTerms.length} of {terms.length} terms
          </div>

          <div className="space-y-6">
            {filteredTerms.map(term => (
              <Card key={term.term} className="shadow-sm">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{term.term}</CardTitle>
                    <Badge variant="secondary">{term.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{term.definition}</p>
                </CardContent>
              </Card>
            ))}
            {filteredTerms.length === 0 && (
                <div className="text-center py-16">
                    <p className="text-lg text-muted-foreground">No terms found matching your criteria.</p>
                </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
