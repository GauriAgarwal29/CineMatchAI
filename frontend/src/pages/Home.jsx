import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Home.css";
import logo from "../assets/logo.jpeg";

export default function Home() {
  const [input, setInput] = useState("");
  const [detectedMood, setDetectedMood] = useState("");
  const [answers, setAnswers] = useState({});
  const [quizMood, setQuizMood] = useState("");
  const [showQuiz, setShowQuiz] = useState(false);

  // ✅ Prompt-based mood detection
  const handleDetectMood = () => {
    if (!input.trim()) return;
    const lower = input.toLowerCase();
    if (
      lower.includes("happy") ||
      lower.includes("excited") ||
      lower.includes("playful") ||
      lower.includes("romantic") ||
      lower.includes("nostalgic") ||
      lower.includes("hopeful")
    )
      setDetectedMood("Joyful 😄");
    else if (
      lower.includes("sad") ||
      lower.includes("lonely") ||
      lower.includes("heartbroken") ||
      lower.includes("melancholic") ||
      lower.includes("down") ||
      lower.includes("depressed")
    )
      setDetectedMood("Melancholic 🥺");
    else if (
      lower.includes("angry") ||
      lower.includes("furious") ||
      lower.includes("stressed") ||
      lower.includes("restless") ||
      lower.includes("aggressive") ||
      lower.includes("competitive") ||
      lower.includes("fearless")
    )
      setDetectedMood("Intense 🔥");
    else if (
      lower.includes("scared") ||
      lower.includes("anxious") ||
      lower.includes("curious") ||
      lower.includes("suspicious") ||
      lower.includes("nervous")
    )
      setDetectedMood("Curious 🧠");
    else if (
      lower.includes("peaceful") ||
      lower.includes("lazy") ||
      lower.includes("chill") ||
      lower.includes("sleepy") ||
      lower.includes("relaxed") ||
      lower.includes("calm")
    )
      setDetectedMood("Relaxed 🌙");
    else if (
      lower.includes("analytical") ||
      lower.includes("philosophical") ||
      lower.includes("creative") ||
      lower.includes("inquisitive") ||
      lower.includes("thoughtful") ||
      lower.includes("inspired")
    )
      setDetectedMood("Intellectual 🤓");
    else if (
      lower.includes("bored") ||
      lower.includes("imaginative") ||
      lower.includes("dreamy") ||
      lower.includes("adventurous") ||
      lower.includes("childlike") ||
      lower.includes("fantasy")
    )
      setDetectedMood("Escapist 🌈");
    else if (
      lower.includes("party") ||
      lower.includes("friends") ||
      lower.includes("date") ||
      lower.includes("family") ||
      lower.includes("discussion")
    )
      setDetectedMood("Social 🎬");
    else setDetectedMood("Neutral 😐");
  };

  // ✅ Updated Questionnaire (each has 5 options)
  const questions = [
    {
      id: 1,
      text: "How are you feeling right now?",
      options: ["Calm", "Happy", "Sad", "Angry", "Anxious"],
    },
    {
      id: 2,
      text: "How would you describe your day?",
      options: ["Peaceful", "Amazing", "Okay", "Stressful", "Tiring"],
    },
    {
      id: 3,
      text: "How energetic do you feel right now?",
      options: ["Full of energy", "Normal", "Low", "Sleepy", "Exhausted"],
    },
    {
      id: 4,
      text: "What would you like to do right now?",
      options: [
        "Go out with friends",
        "Watch something fun",
        "Stay alone and relax",
        "Reflect or read",
        "Do something exciting",
      ],
    },
    {
      id: 5,
      text: "What kind of music would you like now?",
      options: ["Upbeat", "Calm", "Emotional", "Rock/Heavy", "Instrumental"],
    },
  ];

  // ✅ Updated Mood Scoring System
  const moodScores = {
    // Joyful
    Happy: 2,
    "Amazing": 2,
    "Go out with friends": 2,
    Upbeat: 2,
    "Do something exciting": 2,

    // Relaxed
    Calm: 1,
    Peaceful: 1,
    "Stay alone and relax": 1,
    "Instrumental": 1,
    "Normal": 1,

    // Melancholic
    Sad: -2,
    Emotional: -1,
    "Tiring": -1,
    "Exhausted": -2,
    "Reflect or read": -1,

    // Intense
    Angry: -2,
    "Rock/Heavy": -2,
    "Stressful": -1,
    Anxious: -1,

    // Neutral/Low
    Okay: 0,
    Low: 0,
    Sleepy: 0,
  };

  const calculateQuizMood = () => {
    let total = 0;
    Object.values(answers).forEach((ans) => {
      total += moodScores[ans] || 0;
    });

    if (total >= 6) setQuizMood("Joyful 😄");
    else if (total >= 3) setQuizMood("Relaxed 🌙");
    else if (total >= 0) setQuizMood("Calm 😊");
    else if (total <= -2) setQuizMood("Melancholic 🥺");
    else setQuizMood("Intense 🔥");
  };

  return (
    <div className="home-fullscreen">
      <div className="logo-container">
        <img src={logo} alt="CineMatch AI Logo" className="main-logo" />
      </div>

      <motion.div
        className="center-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="tagline">Let your mood choose the movie 🎬</h1>

        {/* Option 1: Prompt-based */}
        <textarea
          placeholder="Describe how you feel... e.g., 'I am feeling dramatic today.'"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="prompt-box"
        />

        {!detectedMood ? (
          <button onClick={handleDetectMood} className="detect-btn">
            Detect Mood
          </button>
        ) : (
          <div className="mood-section">
            <p className="mood-text">
              Detected Mood: <span>{detectedMood}</span>
            </p>
            <button
              className="recommend-btn"
              onClick={() => {
  const moodClean =
    detectedMood.replace(/[^a-zA-Z]/g, "") || "Neutral";
  window.location.href = `/recommendations?mood=${moodClean}`;
}}


            >
              🎥 Find Movies for Me
            </button>
          </div>
        )}

        <div className="divider">─── OR ───</div>

        {/* Option 2: Quiz */}
        <button
          className="quiz-toggle-btn glow"
          onClick={() => setShowQuiz((prev) => !prev)}
        >
          🧩 Answer a Few Questions to Detect Your Mood
        </button>

        <AnimatePresence>
          {showQuiz && (
            <motion.div
              key="quiz"
              className="quiz-container"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.4 }}
            >
              {questions.map((q) => (
                <div key={q.id} className="question-block">
                  <p>{q.text}</p>
                  <div className="options">
                    {q.options.map((opt) => (
                      <label
                        key={opt}
                        className={`option-card ${
                          answers[q.id] === opt ? "selected" : ""
                        }`}
                      >
                        <input
                          type="radio"
                          name={`question-${q.id}`}
                          value={opt}
                          checked={answers[q.id] === opt}
                          onChange={(e) =>
                            setAnswers({ ...answers, [q.id]: e.target.value })
                          }
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}

              {!quizMood ? (
                <button onClick={calculateQuizMood} className="detect-btn">
                  Detect My Mood
                </button>
              ) : (
                <div className="mood-section">
                  <p className="mood-text">
                    Detected Mood: <span>{quizMood}</span>
                  </p>
                  <button
                    className="recommend-btn"
                     onClick={() => {
  const moodClean =
    quizMood.replace(/[^a-zA-Z]/g, "") || "Neutral";
  window.location.href = `/recommendations?mood=${moodClean}`;
}}



                  >
                    🎥 See Movie Recommendations
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
