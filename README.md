# 🕌 Tasbih Counter - Islamic Dhikr Tracker

A beautiful and interactive Islamic dhikr counter application built with Next.js, React, and Tailwind CSS. Track your daily prayers and remembrance of Allah with an elegant, user-friendly interface.

![Tasbih Counter](https://img.shields.io/badge/Version-1.0.0-green.svg)
![Next.js](https://img.shields.io/badge/Next.js-14.2.0-black.svg)
![React](https://img.shields.io/badge/React-18.3.0-blue.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38bdf8.svg)

## ✨ Features

- 📿 **10 Essential Dhikr** - Track the most important Islamic prayers
- 🌙 **Dark/Light Mode** - Easy on the eyes day and night
- 📅 **Daily History** - View your dhikr counts from any past date
- 💾 **LocalStorage** - Automatically saves your progress (30+ years of data)
- 🔄 **Auto Reset** - Counters reset daily at midnight (local timezone)
- 📱 **Responsive Design** - Works perfectly on mobile and desktop
- 🎨 **Beautiful UI** - Modern design with smooth animations
- 🔤 **Arabic Typography** - Traditional Quranic fonts (Amiri Quran, Scheherazade)

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/tasbih-counter.git
   cd tasbih-counter
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📦 Project Structure

```
tasbih-counter/
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.js         # Root layout with metadata
│   └── page.js           # Home page
├── components/
│   └── TasbihCounter.jsx # Main counter component
├── public/               # Static assets
├── .gitignore
├── README.md
├── package.json
├── next.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎯 Usage

### Counting Dhikr
- Click **"Count"** button to increment
- Click **"Minus"** button to decrement
- Click **"Reset"** (🔄) to reset individual counter
- Click **"Reset All"** to reset all counters

### Viewing History
1. Click the **"History"** button (📅)
2. Select a date from the calendar
3. View your dhikr counts from that day
4. Click **"Today"** to return to current day

### Theme Toggle
- Click **"Dark"** or **"Light"** button to switch themes
- Your preference is saved automatically

## 💾 Data Storage

- Uses browser's localStorage
- Each day's data is stored separately
- Can store **30+ years** of history
- Automatic daily reset at midnight
- No server required - works offline!

## 🛠️ Technologies Used

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **Tailwind CSS 3** - Utility-first CSS
- **Lucide React** - Beautiful icons
- **Google Fonts** - Amiri Quran & Scheherazade New

## 🤲 Dhikr Included

1. صلى اللہ علیہ وسلم - Salawat on Prophet Muhammad (ﷺ)
2. دعاء ابراہیم - Dua of Ibrahim
3. أستغفرُ اللہ - Astaghfirullah
4. سُبحانَ اللہ - SubhanAllah
5. الحمدُ للہ - Alhamdulillah
6. اللہُ أکبر - Allahu Akbar
7. اللَّہُمَّ أَجِرْنَا مِنَ النَّارِ - Protection from Hellfire
8. سُبحانَ اللہِ وَبِحَمْدِہِ، سُبحانَ اللہِ العظیم - Glorification
9. لا إلہَ إلا اللہُ... - Tawheed declaration
10. لا إلہَ إلا أنتَ سُبحانَكَ... - Dua of Yunus (AS)

## 🌐 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or support, please open an issue on GitHub.

## 🙏 Acknowledgments

- Islamic prayers and dhikr from authentic sources
- Arabic fonts from Google Fonts
- Icons from Lucide React
- Built with love for the Muslim community

---

**May Allah accept your dhikr and good deeds. Ameen.** 🤲

بارك الله فيك (Barakallahu Feek)
```

---

## 🚀 Quick Setup Instructions

1. **Create project folder:**
   ```bash
   mkdir tasbih-counter
   cd tasbih-counter
   ```

2. **Initialize Next.js:**
   ```bash
   npx create-next-app@latest . --tailwind --app --no-src-dir
   ```

3. **Install dependencies:**
   ```bash
   npm install lucide-react
   ```

4. **Copy all files** from above into their respective locations

5. **Run the app:**
   ```bash
   npm run dev
   ```

Your Tasbih Counter will be live at `http://localhost:3000`! 🎉