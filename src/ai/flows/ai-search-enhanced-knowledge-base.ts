'use server';
/**
 * @fileOverview An AI-powered search for the knowledge base.
 *
 * - aiSearchEnhancedKnowledgeBase - A function that handles the search process.
 * - AISearchEnhancedKnowledgeBaseInput - The input type for the aiSearchEnhancedKnowledgeBase function.
 * - AISearchEnhancedKnowledgeBaseOutput - The return type for the aiSearchEnhancedKnowledgeBase function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AISearchEnhancedKnowledgeBaseInputSchema = z.object({
  query: z.string().describe('The search query.'),
});
export type AISearchEnhancedKnowledgeBaseInput = z.infer<typeof AISearchEnhancedKnowledgeBaseInputSchema>;

const AISearchEnhancedKnowledgeBaseOutputSchema = z.object({
  results: z.string().describe('The search results.'),
});
export type AISearchEnhancedKnowledgeBaseOutput = z.infer<typeof AISearchEnhancedKnowledgeBaseOutputSchema>;

export async function aiSearchEnhancedKnowledgeBase(input: AISearchEnhancedKnowledgeBaseInput): Promise<AISearchEnhancedKnowledgeBaseOutput> {
  return aiSearchEnhancedKnowledgeBaseFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiSearchEnhancedKnowledgeBasePrompt',
  input: {schema: AISearchEnhancedKnowledgeBaseInputSchema},
  output: {schema: AISearchEnhancedKnowledgeBaseOutputSchema},
  prompt: `You are an expert in OT/ICS cybersecurity.

You will use the following knowledge base to answer the user's query.

Knowledge Base: [PLACEHOLDER FOR KNOWLEDGE BASE CONTENT]

Query: {{{query}}}

Results:`,
});

const aiSearchEnhancedKnowledgeBaseFlow = ai.defineFlow(
  {
    name: 'aiSearchEnhancedKnowledgeBaseFlow',
    inputSchema: AISearchEnhancedKnowledgeBaseInputSchema,
    outputSchema: AISearchEnhancedKnowledgeBaseOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
