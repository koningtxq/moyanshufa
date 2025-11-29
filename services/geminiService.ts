import { GoogleGenAI, Type } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateCalligraphyConsultation = async (name: string, wish: string): Promise<string> => {
  if (!apiKey) {
    console.warn("API Key is missing. Mocking response.");
    return JSON.stringify({
      poem: "墨香飘散意悠长，\n颜如玉润在书房。\n笔走龙蛇惊风雨,\n艺海无涯韵味香。",
      styleRecommendation: "推荐尝试【行楷】，既有楷书的端庄，又有行书的流畅，正如阁下所求之事，稳健中不失灵动。",
      meaning: "这首藏头诗寓意您的生活如墨香般长久醇厚，事业如玉般温润光泽。"
    });
  }

  const prompt = `
    你是一位德高望重的中国书法大师。
    用户名字是：${name}
    用户的心愿或特质是：${wish}

    请为该用户生成一份“笔墨灵韵”咨询结果。
    
    请严格按照以下JSON格式返回：
    {
      "poem": "一首4句的七言或五言藏头诗（如果很难藏头，则意境优美的诗），贴合用户的名字或心愿。",
      "styleRecommendation": "推荐一种书法字体（如楷书、隶书、行书、草书、篆书），并简短解释为什么这种字体适合该用户的气质或心愿。",
      "meaning": "简短解读诗句的寓意。"
    }
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            poem: { type: Type.STRING },
            styleRecommendation: { type: Type.STRING },
            meaning: { type: Type.STRING },
          },
          required: ["poem", "styleRecommendation", "meaning"],
        },
      },
    });

    const text = response.text;
    return text || "{}";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
