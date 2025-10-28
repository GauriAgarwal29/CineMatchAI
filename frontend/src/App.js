// src/App.js
import React, { useState } from "react";
import AuthPage from "./components/AuthPage";
import MoodDetectionPage from "./components/MoodDetectionPage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [moodData, setMoodData] = useState(null);

  return (
    <div>
      {!isAuthenticated ? (
        <AuthPage onAuthSuccess={() => setIsAuthenticated(true)} />
      ) : !moodData ? (
        <MoodDetectionPage onComplete={(mood) => setMoodData(mood)} />
      ) : (
        <div className="text-white text-center mt-20">
          <h1 className="text-4xl font-bold">🎬 CineMatchAI</h1>
          <p className="text-lg mt-4">Your mood today: {moodData.join(", ")}</p>
        </div>
      )}
    </div>
  );
}

export default App;
