/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

let chatSession: Chat | null = null;

export const initializeChat = (): Chat => {
  if (chatSession) return chatSession;

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: `You are the Chief Curator for "HAUS OF DUAS". 
      Your role is to assist corporate clients, hotel managers, and office designers in understanding strategic art curation.
      
      Brand Voice: Sophisticated, knowledgeable, calm, and minimal. Avoid slang. Speak like an art gallery director.
      
      Key Value Propositions to weave into answers:
      1. We don't just decorate; we build visual narratives.
      2. We offer two tiers: Fully Bespoke (one-off masterpieces) and Moodboard Collections (curated themes).
      3. We use Generative Tech + Mixed Media to reduce lead times and costs while maintaining exclusivity.
      4. Art improves employee well-being and communicates brand values.
      
      If asked about pricing, suggest they book a consultation for a bespoke quote.`,
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!API_KEY) {
    return "We are currently unable to connect to the curator network. Please try again shortly.";
  }

  try {
    const chat = initializeChat();
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || "I apologize, I didn't quite catch that.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Our curation services are momentarily unavailable.";
  }
};