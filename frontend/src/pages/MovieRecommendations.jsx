import React, { useState, useEffect } from "react";
import AuthModal from "../components/AuthModal";
import "../styles/Recommendations.css";

export default function MovieRecommendations() {
  // ✅ Get mood from URL (e.g. /recommendations?mood=joyful)
  const params = new URLSearchParams(window.location.search);
  const moodParam = params.get("mood") || "Neutral";
  const moodKey =
    moodParam.charAt(0).toUpperCase() + moodParam.slice(1).toLowerCase();

  const [showAuth, setShowAuth] = useState(false);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("cine_user")) || null
  );

  // ✅ Bollywood Movie Data with working Wikipedia image URLs
  const movieData = {
    Joyful: [
      {
        title: "Zindagi Na Milegi Dobara",
        poster: "https://upload.wikimedia.org/wikipedia/en/3/32/Zindagi_Na_Milegi_Dobara.jpg",
        imdbRating: 8.2,
        platforms: ["Netflix", "Prime"],
      },
      {
        title: "Yeh Jawaani Hai Deewani",
        poster: "https://upload.wikimedia.org/wikipedia/en/f/fc/Yeh_Jawaani_Hai_Deewani.jpg",
        imdbRating: 7.1,
        platforms: ["Hotstar"],
      },
      {
        title: "Dil Dhadakne Do",
        poster: "https://upload.wikimedia.org/wikipedia/en/5/56/Dil_Dhadakne_Do_poster.jpg",
        imdbRating: 7.1,
        platforms: ["Netflix"],
      },
      {
        title: "3 Idiots",
        poster: "https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg",
        imdbRating: 8.4,
        platforms: ["Prime"],
      },
    ],
    Melancholic: [
      {
        title: "Rockstar",
        poster: "https://upload.wikimedia.org/wikipedia/en/1/17/Rockstar_Movie_Poster.jpg",
        imdbRating: 7.7,
        platforms: ["Netflix"],
      },
      {
        title: "Tamasha",
        poster: "https://upload.wikimedia.org/wikipedia/en/0/09/Tamasha_%28film%29_poster.jpg",
        imdbRating: 7.2,
        platforms: ["Prime"],
      },
      {
        title: "Barfi!",
        poster: "https://upload.wikimedia.org/wikipedia/en/1/1f/Barfi%21_poster.jpg",
        imdbRating: 8.1,
        platforms: ["Hotstar"],
      },
      {
        title: "Highway",
        poster: "https://upload.wikimedia.org/wikipedia/en/7/7b/Highway_%282014_Hindi_film%29.jpg",
        imdbRating: 7.6,
        platforms: ["Prime"],
      },
    ],
    Intense: [
      {
        title: "Gully Boy",
        poster: "https://upload.wikimedia.org/wikipedia/en/0/00/Gully_Boy_poster.jpg",
        imdbRating: 7.9,
        platforms: ["Prime"],
      },
      {
        title: "War",
        poster: "https://upload.wikimedia.org/wikipedia/en/f/fc/War_official_poster.jpg",
        imdbRating: 6.5,
        platforms: ["Prime"],
      },
      {
        title: "Raees",
        poster: "https://upload.wikimedia.org/wikipedia/en/8/8f/Raees_film_poster.jpg",
        imdbRating: 6.9,
        platforms: ["Netflix"],
      },
      {
        title: "Pathaan",
        poster: "https://upload.wikimedia.org/wikipedia/en/4/4c/Pathaan_film_poster.jpg",
        imdbRating: 6.9,
        platforms: ["Prime"],
      },
    ],
    Curious: [
      {
        title: "Drishyam",
        poster: "https://upload.wikimedia.org/wikipedia/en/8/85/Drishyam_2015_film_poster.jpg",
        imdbRating: 8.2,
        platforms: ["Prime"],
      },
      {
        title: "Kahaani",
        poster: "https://upload.wikimedia.org/wikipedia/en/8/88/Kahaani_poster.jpg",
        imdbRating: 8.1,
        platforms: ["Netflix"],
      },
      {
        title: "Talaash",
        poster: "https://upload.wikimedia.org/wikipedia/en/9/9b/Talaash_film_poster.jpg",
        imdbRating: 7.2,
        platforms: ["Prime"],
      },
      {
        title: "Andhadhun",
        poster: "https://upload.wikimedia.org/wikipedia/en/f/fb/Andhadhun_poster.jpg",
        imdbRating: 8.3,
        platforms: ["Netflix"],
      },
    ],
    Relaxed: [
      {
        title: "Wake Up Sid",
        poster: "https://upload.wikimedia.org/wikipedia/en/1/17/Wake_Up_Sid.jpg",
        imdbRating: 7.6,
        platforms: ["Netflix"],
      },
      {
        title: "Dear Zindagi",
        poster: "https://upload.wikimedia.org/wikipedia/en/8/8e/Dear_Zindagi_poster.jpg",
        imdbRating: 7.3,
        platforms: ["Netflix"],
      },
      {
        title: "Dil Chahta Hai",
        poster: "https://upload.wikimedia.org/wikipedia/en/1/13/Dil_Chahta_Hai_poster.jpg",
        imdbRating: 8.1,
        platforms: ["Prime"],
      },
      {
        title: "Tamasha",
        poster: "https://upload.wikimedia.org/wikipedia/en/0/09/Tamasha_%28film%29_poster.jpg",
        imdbRating: 7.2,
        platforms: ["Prime"],
      },
    ],
    Intellectual: [
      {
        title: "Taare Zameen Par",
        poster: "https://upload.wikimedia.org/wikipedia/en/0/0c/Taare_Zameen_Par.jpg",
        imdbRating: 8.4,
        platforms: ["Prime"],
      },
      {
        title: "Black",
        poster: "https://upload.wikimedia.org/wikipedia/en/0/0f/Black_%282005_film%29_poster.jpg",
        imdbRating: 8.2,
        platforms: ["Prime"],
      },
      {
        title: "Chak De! India",
        poster: "https://upload.wikimedia.org/wikipedia/en/1/1d/Chak_De%21_India_poster.jpg",
        imdbRating: 8.2,
        platforms: ["Netflix"],
      },
      {
        title: "12th Fail",
        poster: "https://upload.wikimedia.org/wikipedia/en/4/4b/12th_Fail_poster.jpg",
        imdbRating: 8.9,
        platforms: ["OTT"],
      },
    ],
    Escapist: [
      {
        title: "Koi Mil Gaya",
        poster: "https://upload.wikimedia.org/wikipedia/en/2/2d/Koi_Mil_Gaya_poster.jpg",
        imdbRating: 7.1,
        platforms: ["Netflix"],
      },
      {
        title: "Om Shanti Om",
        poster: "https://upload.wikimedia.org/wikipedia/en/9/9c/Om_Shanti_Om.jpg",
        imdbRating: 6.7,
        platforms: ["Prime"],
      },
      {
        title: "Krrish",
        poster: "https://upload.wikimedia.org/wikipedia/en/0/03/Krrish_poster.jpg",
        imdbRating: 7.1,
        platforms: ["Netflix"],
      },
      {
        title: "Ra.One",
        poster: "https://upload.wikimedia.org/wikipedia/en/0/0d/Ra.One_poster.jpg",
        imdbRating: 4.8,
        platforms: ["Prime"],
      },
    ],
    Social: [
      {
        title: "Chhichhore",
        poster: "https://upload.wikimedia.org/wikipedia/en/3/3f/Chhichhore_Poster.jpg",
        imdbRating: 8.0,
        platforms: ["Prime"],
      },
      {
        title: "Student of the Year",
        poster: "https://upload.wikimedia.org/wikipedia/en/7/7b/Student_of_the_Year_Poster.jpg",
        imdbRating: 5.4,
        platforms: ["Netflix"],
      },
      {
        title: "Veere Di Wedding",
        poster: "https://upload.wikimedia.org/wikipedia/en/3/3d/Veere_Di_Wedding_poster.jpg",
        imdbRating: 4.9,
        platforms: ["Prime"],
      },
      {
        title: "Piku",
        poster: "https://upload.wikimedia.org/wikipedia/en/f/f7/Piku_poster.jpg",
        imdbRating: 7.6,
        platforms: ["Netflix"],
      },
    ],
    Neutral: [
      {
        title: "Lagaan",
        poster: "https://upload.wikimedia.org/wikipedia/en/b/b6/Lagaan.jpg",
        imdbRating: 8.1,
        platforms: ["Prime"],
      },
      {
        title: "PK",
        poster: "https://upload.wikimedia.org/wikipedia/en/c/c3/PK_poster.jpg",
        imdbRating: 8.1,
        platforms: ["Netflix"],
      },
      {
        title: "English Vinglish",
        poster: "https://upload.wikimedia.org/wikipedia/en/4/41/English_Vinglish_poster.jpg",
        imdbRating: 7.9,
        platforms: ["Prime"],
      },
      {
        title: "Barfi!",
        poster: "https://upload.wikimedia.org/wikipedia/en/1/1f/Barfi%21_poster.jpg",
        imdbRating: 8.1,
        platforms: ["Hotstar"],
      },
    ],
  };

  // ✅ Select Movies
  const movies = movieData[moodKey] || movieData.Neutral;

  // ✅ Watchlist persistence
  const [watchlist, setWatchlist] = useState(() => {
    try {
      const saved = localStorage.getItem("cine_watchlist");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cine_watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  const toggleWatchlist = (movie) => {
  if (!user) {
    setShowAuth(true);
    return;
  }
  setWatchlist((prev) => {
    const exists = prev.find((m) => m.title === movie.title);
    return exists
      ? prev.filter((m) => m.title !== movie.title)
      : [...prev, movie];
  });
};


  const isInWatchlist = (movie) =>
    !!watchlist.find((m) => m.title === movie.title);

  return (
    <div className="recommendations-page">
      <header className="recommend-header">
        <h1>🎬 Movie Recommendations</h1>
        <p className="mood-display">
          Based on your mood: <span>{moodKey}</span>
        </p>
      </header>

      <div className="movie-grid">
        {movies.map((movie, i) => (
          <div className="movie-card" key={i}>
            <div className="poster-wrap">
              <img src={movie.poster} alt={movie.title} />
              <div className="rating-badge">⭐ {movie.imdbRating}</div>
            </div>

            <h3>{movie.title}</h3>

            <div className="platforms">
              {movie.platforms.map((p) => (
                <span key={p} className="platform-badge">
                  {p}
                </span>
              ))}
            </div>

            <button
              className={`watchlist-btn ${
                isInWatchlist(movie) ? "added" : ""
              }`}
              onClick={() => toggleWatchlist(movie)}
            >
              {isInWatchlist(movie)
                ? "✓ Added to Watchlist"
                : "+ Add to Watchlist"}
            </button>
          </div>
        ))}
      </div>

      {showAuth && (
        <AuthModal
          onClose={() => setShowAuth(false)}
          onLogin={(email) => setUser({ email })}
        />
      )}
    </div>
  );
}
