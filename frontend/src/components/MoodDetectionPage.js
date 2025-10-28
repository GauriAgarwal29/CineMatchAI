// src/components/MoodDetectionPage.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaHeart, FaSmile, FaSadTear, FaBrain, FaTheaterMasks, FaLightbulb } from "react-icons/fa";


const questions = [
  "How are you feeling today?",
  "What kind of movie are you in the mood for?",
  "Choose the word that matches your vibe right now:",
];

const moods = [
  { icon: <FaSmile className="text-yellow-400 text-5xl" />, label: "Happy" },
  { icon: <FaSadTear className="text-blue-400 text-5xl" />, label: "Sad" },
  { icon: <FaLightbulb className="text-orange-400 text-5xl" />, label: "Inspirational" },
  { icon: <FaBrain className="text-purple-400 text-5xl" />, label: "Intellectual" },
  { icon: <FaTheaterMasks className="text-pink-400 text-5xl" />, label: "Dramatic" },
  { icon: <FaHeart className="text-red-500 text-5xl" />, label: "Romantic" },
];


const MoodDetectionPage = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleMoodSelect = (mood) => {
    setAnswers([...answers, mood]);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // send mood data to next step
      onComplete(answers.concat(mood));
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white p-6 relative overflow-hidden">
      {/* Animated floating lights */}
      <div className="absolute w-full h-full overflow-hidden">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute bg-purple-500 opacity-20 w-72 h-72 rounded-full blur-3xl top-20 left-10"
        />
        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute bg-blue-500 opacity-20 w-64 h-64 rounded-full blur-3xl bottom-10 right-16"
        />
      </div>

      {/* Question Container */}
      <motion.div
        key={currentQuestion}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="z-10 text-center"
      >
        <h2 className="text-3xl font-semibold mb-8 text-gray-100">
          {questions[currentQuestion]}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
          {moods.map((option, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleMoodSelect(option.mood)}
              className="flex flex-col items-center justify-center bg-gray-800 hover:bg-gray-700 text-white p-6 rounded-2xl shadow-lg w-32 h-32"
            >
              <div className="text-4xl mb-3">{option.icon}</div>
              <span className="text-lg font-medium">{option.mood}</span>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default MoodDetectionPage;
