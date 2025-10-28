import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Twemoji from "react-twemoji";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="relative z-10 w-full max-w-md bg-black/60 backdrop-blur-2xl rounded-2xl shadow-2xl p-8 text-white border border-white/10">
      <Twemoji options={{ className: "twemoji" }}>
        <motion.h2
          key={isLogin ? "login" : "signup"}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text flex items-center justify-center gap-2"
        >
          {isLogin ? (
            <>
              🍿 Login to <span className="text-white" >CineMatchAI</span>
            </>
          ) : (
            <>
              🎥 Join <span className="text-white">CineMatchAI</span>
            </>
          )}
        </motion.h2>
      </Twemoji>

      <AnimatePresence mode="wait">
        {isLogin ? (
          <motion.form
            key="loginForm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-4"
          >
            <input
              type="email"
              placeholder="Email"
              className="p-3 bg-gray-900/70 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-3 bg-gray-900/70 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="mt-2 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 transition font-semibold flex items-center justify-center gap-2"
            >
              🚀 Login
            </button>
          </motion.form>
        ) : (
          <motion.form
            key="signupForm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-4"
          >
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 bg-gray-900/70 rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 bg-gray-900/70 rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-3 bg-gray-900/70 rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              className="mt-2 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition font-semibold flex items-center justify-center gap-2"
            >
              🚀 Sign Up
            </button>
          </motion.form>
        )}
      </AnimatePresence>

      <Twemoji options={{ className: "twemoji" }}>
        <p className="mt-6 text-center text-sm text-gray-400">
          {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-400 hover:underline font-small"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </Twemoji>
    </div>
  );
}
