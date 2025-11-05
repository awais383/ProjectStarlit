'use server';

/**
 * @fileOverview An AI chat tool that answers questions, provides coaching guidance,
 * and summarizes content from the app's knowledge base.
 *
 * - aiChatTool - A function that handles the AI chat process.
 * - AiChatToolInput - The input type for the aiChatTool function.
 * - AiChatToolOutput - The return type for the aiChatTool function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiChatToolInputSchema = z.object({
  question: z.string().describe('The user question.'),
  context: z.string().optional().describe('The context for the question.'),
});
export type AiChatToolInput = z.infer<typeof AiChatToolInputSchema>;

const AiChatToolOutputSchema = z.object({
  answer: z.string().describe('The answer to the question.'),
});
export type AiChatToolOutput = z.infer<typeof AiChatToolOutputSchema>;

export async function aiChatTool(input: AiChatToolInput): Promise<AiChatToolOutput> {
  return aiChatToolFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiChatToolPrompt',
  input: {schema: AiChatToolInputSchema},
  output: {schema: AiChatToolOutputSchema},
  prompt: `You are a helpful AI assistant that answers user questions, provides coaching guidance, and summarizes content.

  Context: {{{context}}}

  Question: {{{question}}}
  Answer:`, // Modified Handlebars template here
});

const aiChatToolFlow = ai.defineFlow(
  {
    name: 'aiChatToolFlow',
    inputSchema: AiChatToolInputSchema,
    outputSchema: AiChatToolOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
