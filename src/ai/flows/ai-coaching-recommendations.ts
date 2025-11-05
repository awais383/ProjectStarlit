'use server';

/**
 * @fileOverview Provides personalized coaching recommendations based on user profile, goals, and preferences.
 *
 * - `getCoachingRecommendations` - A function that returns personalized coaching recommendations for a user.
 * - `CoachingRecommendationsInput` - The input type for the `getCoachingRecommendations` function.
 * - `CoachingRecommendationsOutput` - The return type for the `getCoachingRecommendations` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CoachingRecommendationsInputSchema = z.object({
  userProfile: z
    .string()
    .describe('A description of the user profile, including their business type, experience, and current challenges.'),
  userGoals: z
    .string()
    .describe('A description of the user goals, including their desired outcomes and timelines.'),
  userPreferences: z
    .string()
    .describe('A description of the user preferences, including their preferred learning styles and content formats.'),
  availableContent: z
    .string()
    .describe('A description of the available content, including articles, blog posts, exercises, and their topics.'),
});
export type CoachingRecommendationsInput = z.infer<typeof CoachingRecommendationsInputSchema>;

const CoachingRecommendationsOutputSchema = z.object({
  recommendations: z.array(
    z.object({
      title: z.string().describe('The title of the recommended content.'),
      description: z.string().describe('A brief description of the content and why it is relevant to the user.'),
      link: z.string().url().describe('A link to the recommended content.'),
    })
  ).describe('A list of personalized coaching recommendations for the user.'),
});
export type CoachingRecommendationsOutput = z.infer<typeof CoachingRecommendationsOutputSchema>;

export async function getCoachingRecommendations(
  input: CoachingRecommendationsInput
): Promise<CoachingRecommendationsOutput> {
  return coachingRecommendationsFlow(input);
}

const coachingRecommendationsPrompt = ai.definePrompt({
  name: 'coachingRecommendationsPrompt',
  input: {schema: CoachingRecommendationsInputSchema},
  output: {schema: CoachingRecommendationsOutputSchema},
  prompt: `You are an AI-powered business coach. Your task is to provide personalized coaching recommendations to users based on their profile, goals, preferences, and the available content.

  User Profile: {{{userProfile}}}
  User Goals: {{{userGoals}}}
  User Preferences: {{{userPreferences}}}
  Available Content: {{{availableContent}}}

  Based on the information above, provide a list of 3-5 coaching recommendations that are most relevant to the user. Each recommendation should include a title, a brief description of the content and why it is relevant to the user, and a link to the content.

  Format your output as a JSON object that adheres to the following schema:
  ${CoachingRecommendationsOutputSchema.description}

  Ensure that the recommendations are specific, actionable, and aligned with the user's goals and preferences.
  `,
});

const coachingRecommendationsFlow = ai.defineFlow(
  {
    name: 'coachingRecommendationsFlow',
    inputSchema: CoachingRecommendationsInputSchema,
    outputSchema: CoachingRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await coachingRecommendationsPrompt(input);
    return output!;
  }
);
