import { useState } from "react";
import { getMovieSuggestion } from "../utils/ai";

function MoodMatcher({ setQuery }) {

  const [mood, setMood] = useState("");
  const [loading, setLoading] = useState(false);

  const handleMoodSearch = async () => {

    if (!mood) return;

    setLoading(true);

    try {

      const movieTitle = await getMovieSuggestion(mood);

      setQuery(movieTitle);

    } catch (err) {
      console.error("AI Error:", err);
    }

    setLoading(false);
  };

  return (
    <div style={{ margin: "20px" }}>

      <h2>AI Mood Matcher 🤖</h2>

      <input
        placeholder="I feel sad but want an action movie..."
        value={mood}
        onChange={(e) => setMood(e.target.value)}
      />

      <button onClick={handleMoodSearch}>
        {loading ? "Thinking..." : "Find Movie"}
      </button>

    </div>
  );
}

export default MoodMatcher;