const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
export const getMovieSuggestion = async (mood) => {

  const prompt = `
Suggest ONLY ONE movie title based on this mood:
"${mood}"

Return only the movie title.
`;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      }),
    }
  );

  const data = await response.json();

  return data.candidates[0].content.parts[0].text.trim();

  if (!data.candidates) {
    throw new Error("AI response invalid");
  }
  
  return data.candidates[0].content.parts[0].text.trim();
};