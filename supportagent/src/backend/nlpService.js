import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: 'YOUR_API_KEY', // Here please enter your OpenAI key like sk:******* i  remove my key because of two many request.
});

/**
 * Generates an answer using the OpenAI API.
 *
 * @param {string} query - The user's question
 * @param {string} documentationText - The relevant documentation text
 * @returns {Promise<string>} - A promise resolving to the generated answer
 */
export const generateAnswer = async (query, documentationText) => {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'user', content: `Answer the following question based on the provided documentation:\n\n${query}\n\nDocumentation:\n${documentationText}` },
      ],
    });

    return response.choices[0]?.message?.content?.trim() || 'No answer found';
  } catch (error) {
    if (error.status === 429) {
      throw new Error('Quota exceeded. Please try again later.');
    } else {
      throw new Error('Failed to generate answer');
    }
  }
};