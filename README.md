# 🌿 Hidden Voice

A calm, anonymous storytelling platform where words exist without the weight of identity. No names, no faces — just raw, honest stories that deserve to be heard.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ Features

- **Anonymous Storytelling** — Stories exist without author identity, creating a peaceful reading experience
- **Story of the Day** — A highlighted featured story on the homepage
- **Mood Tags** — Color-coded labels (happy, sad, reflective, hopeful, nostalgic, anxious)
- **Dark / Light Mode** — Toggleable theme with `localStorage` persistence
- **Responsive Design** — Mobile-first layout with hamburger navigation
- **Smooth Animations** — Fade-in and fade-up transitions on page content
- **Drop Cap Typography** — Elegant first-letter styling on story pages
- **Prev / Next Navigation** — Seamless navigation between stories
- **Future-Ready** — Structured for easy MERN backend integration

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | UI components with functional hooks |
| **Vite 7** | Lightning-fast dev server & bundler |
| **Tailwind CSS v4** | Utility-first styling with custom theme |
| **React Router v7** | Client-side routing |
| **Google Fonts** | Outfit (headings) + Lora (story body) |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Sticky nav, dark mode toggle, mobile menu
│   ├── Footer.jsx          # Tagline & copyright
│   ├── MoodTag.jsx         # Color-coded mood pill component
│   ├── StoryCard.jsx       # Homepage cards (regular + featured)
│   ├── StoryPage.jsx       # Full story layout with navigation
│   └── Pagination.jsx      # Page numbers with prev/next
├── pages/
│   ├── Home.jsx            # Story of the Day + paginated listing
│   ├── About.jsx           # Anonymous storytelling concept
│   ├── Story1.jsx          # "The Last Train Home"
│   ├── Story2.jsx          # "Letters I Never Sent"
│   └── Story3.jsx          # "The Garden Between Us"
├── data/
│   └── storiesData.js      # Centralized story data (swap with API later)
├── context/
│   └── DarkModeContext.jsx  # Theme state management
├── App.jsx                 # Router + layout shell
├── main.jsx                # Entry point
└── index.css               # Global styles, theme tokens, animations
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/hidden-voice.git
cd hidden-voice

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be running at **http://localhost:5173/**

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` directory, ready for deployment.

---

## 📖 Example Stories

| # | Title | Mood | Description |
|---|---|---|---|
| 1 | The Last Train Home | 🟤 Nostalgic | A return to the train platform where everything changed |
| 2 | Letters I Never Sent | 🟣 Reflective | Forty-three undelivered letters and the words we carry |
| 3 | The Garden Between Us | 🟠 Hopeful | Two strangers growing something beautiful in silence |

---

## 🔮 Roadmap

- [ ] MERN backend integration (MongoDB, Express, React, Node.js)
- [ ] User story submission (anonymous)
- [ ] Dynamic story loading from database
- [ ] Search and filter by mood
- [ ] Infinite scroll pagination
- [ ] Reading time estimates
- [ ] Share story via link

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create your branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

<p align="center">
  <em>"We write not because someone is listening, but because silence has a weight — and words, even unheard ones, make us lighter."</em>
</p>
