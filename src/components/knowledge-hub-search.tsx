'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Loader2 } from 'lucide-react';
import { aiSearchEnhancedKnowledgeBase } from '@/ai/flows/ai-search-enhanced-knowledge-base';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const searchSchema = z.object({
  query: z.string().min(3, "Search query must be at least 3 characters."),
});

export function KnowledgeHubSearch() {
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof searchSchema>>({
    resolver: zodResolver(searchSchema),
    defaultValues: { query: "" },
  });

  async function onSubmit(values: z.infer<typeof searchSchema>) {
    setIsSearching(true);
    setSearchResults(null);
    setError(null);
    try {
      const result = await aiSearchEnhancedKnowledgeBase({ query: values.query });
      setSearchResults(result.results);
    } catch (e) {
      setError("Failed to perform search. Please try again.");
      console.error(e);
    } finally {
      setIsSearching(false);
    }
  }

  return (
    <div className="space-y-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-start gap-2 sm:gap-4">
          <FormField
            control={form.control}
            name="query"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormControl>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input placeholder="Search for articles, guides, and best practices..." className="pl-10 h-12 text-base" {...field} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" size="lg" className="h-12" disabled={isSearching}>
            {isSearching ? <Loader2 className="h-5 w-5 animate-spin" /> : <Search className="h-5 w-5 md:hidden" />}
            <span className="hidden md:inline">Search</span>
          </Button>
        </form>
      </Form>

      {isSearching && (
        <div className="flex items-center justify-center py-8">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <span className="ml-4 text-muted-foreground">Searching knowledge base...</span>
        </div>
      )}
      
      {error && (
        <Card className="bg-destructive/10 border-destructive/50">
          <CardHeader>
            <CardTitle className="text-destructive">Search Error</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{error}</p>
          </CardContent>
        </Card>
      )}

      {searchResults && (
        <Card className="bg-secondary">
          <CardHeader>
            <CardTitle>AI-Powered Search Results</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">{searchResults}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
