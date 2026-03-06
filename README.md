# 🎬 CineStream – AI-Powered Movie Discovery App

CineStream is a Netflix-style movie discovery application built with **React** that allows users to search for movies, scroll through results infinitely, save favorites, and even get movie recommendations based on their mood using AI.

---

## 🌐 Live Demo

🔗 [https://your-vercel-url.vercel.app](https://cine-stream-6nno.vercel.app/)

---

## 📸 Project Preview

<img width="1575" height="778" alt="image" src="https://github.com/user-attachments/assets/d3869af5-efff-472c-b22f-f78ad180aeb0" />


---

## 🚀 Features

### 🔍 Movie Search

Users can search for movies using the OMDb API.

### ⚡ Debounced API Calls

Search input uses debouncing so API calls are made only after the user stops typing.

### ♾ Infinite Scrolling

Movies load dynamically as the user scrolls using the Intersection Observer API.

### ❤️ Favorites System

Users can add movies to favorites which are stored in localStorage.

### 🖼 Lazy Loading

Movie posters are loaded lazily to improve performance.

### 🤖 AI Mood Matcher

Users can describe their mood and receive a movie suggestion powered by Google Gemini AI.

Example:

```
Input: "I feel nostalgic but want an action movie"
AI Suggestion: "Mad Max: Fury Road"
```

---

## 🧠 Technologies Used

* React
* Vite
* JavaScript
* CSS Grid
* OMDb API
* Google Gemini API
* Intersection Observer API
* Local Storage

---

## 🏗 Project Architecture

```
src
│
├─ components
│   MovieCard.jsx
│   MovieGrid.jsx
│   SearchBar.jsx
│   MoodMatcher.jsx
│
├─ hooks
│   useMovies.js
│   useDebounce.js
│   useInfiniteScroll.js
│
├─ pages
│   Home.jsx
│   Favorites.jsx
│
├─ utils
│   api.js
│   ai.js
```

---

## 🔑 Environment Variables

Create a `.env` file in the root folder.

```
VITE_OMDB_API_KEY=your_omdb_key
VITE_GEMINI_API_KEY=your_gemini_key
```

---

## 🛠 Installation

Clone the repository:

```
git clone https://github.com/yourusername/cinestream.git
```

Navigate to the project:

```
cd cinestream
```

Install dependencies:

```
npm install
```

Run development server:

```
npm run dev
```

---

## 🚀 Deployment

This project is deployed using **Vercel**.

Steps:

1. Push project to GitHub
2. Import repository in Vercel
3. Add environment variables
4. Deploy

---

## 📈 Performance Optimizations

* Debounced API requests
* Lazy loading images
* Infinite scroll
* Optimized API calls

---

## 📚 Future Improvements

* Movie details page
* Trailer integration
* Dark/light theme toggle
* User authentication
* Watchlist feature

---

## 👩‍💻 Author

Tanishka
AI Developer/Full Stack Developer

GitHub: https://github.com/Tanishkaa-py

