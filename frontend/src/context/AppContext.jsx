import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [user, setUser] = useState(null);
  const [mood, setMood] = useState("");
  const [watchlist, setWatchlist] = useState([]);

  const value = { user, setUser, mood, setMood, watchlist, setWatchlist };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  return useContext(AppContext);
}
