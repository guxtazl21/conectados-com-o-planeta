import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const systemInstruction = `Você é um especialista em reciclagem e gestão de resíduos chamado 'Eco'. Seu objetivo é fornecer conselhos claros, concisos e práticos para ajudar os usuários a viver de forma mais sustentável. Responda às perguntas dos usuários sobre como reciclar itens específicos, os benefícios da reciclagem e como se envolver em iniciativas locais de gestão de resíduos. Seja encorajador, positivo e amigável em seu tom. Mantenha suas respostas breves e fáceis de entender.`;

export const getRecyclingInfo = async (prompt: string) => {
  try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
            systemInstruction: systemInstruction,
            temperature: 0.7,
            topP: 1,
            topK: 32
        }
    });
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Desculpe, estou com problemas para me conectar à minha base de conhecimento no momento. Por favor, tente novamente mais tarde.";
  }
};