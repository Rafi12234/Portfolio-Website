# 🚀 Portfolio Website - Shajedul Kabir Rafi

A professional, modern, and animated portfolio website built with React, featuring smooth transitions and a beautiful purple/pink gradient theme inspired by the CareerPath design.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite)
![License](https://img.shields.io/badge/License-MIT-blue)

## ✨ Features

- 🎨 **Modern UI/UX**: Beautiful purple/pink gradient theme with glassmorphism effects
- ⚡ **Smooth Animations**: Powered by Framer Motion for buttery-smooth transitions
- 📱 **Fully Responsive**: Optimized for all devices from mobile to desktop
- 🎯 **Interactive Sections**:
  - Hero section with animated greetings
  - About section with highlights
  - Skills showcase with progress bars
  - GitHub statistics with contribution consistency tracking
  - Projects portfolio with filtering
  - Contact form with social links
- 🌟 **GitHub Integration**: Live stats showing contributions, repositories, and activity
- 🔥 **Performance Optimized**: Fast loading with Vite bundler
- ♿ **Accessible**: Built with accessibility best practices

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Animations**: Framer Motion 12.23.24
- **Icons**: React Icons 5.5.0
- **Routing**: React Router DOM 7.9.6
- **Styling**: Custom CSS with CSS Variables

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rafi12234/Portfolio-Website.git
   cd Portfolio-Website/portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎨 Color Scheme

The website uses a stunning purple/pink gradient theme:

```css
--primary-purple: #6C3FE4
--primary-pink: #FF4DA6
--dark-bg: #0D1117
--darker-bg: #08090C
--gradient-1: linear-gradient(135deg, #6C3FE4 0%, #A855F7 50%, #FF4DA6 100%)
```

## 📁 Project Structure

```
portfolio-website/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── GitHubStats.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

## 🌟 Key Sections

### 1. Hero Section
- Animated greeting with wave emoji
- Name with gradient text
- Role descriptions
- Quick stats preview (Contributions, Repositories, Projects)
- Download CV button
- Floating tech icons

### 2. About Section
- Personal introduction
- Highlight cards (Education, Development, Problem Solving, Coffee-Powered)
- Current focus and upcoming goals
- Motivational quote

### 3. Skills Section
- Categorized skills (Languages, Frontend, Mobile, Backend & Tools)
- Animated progress bars
- Interactive skill cards
- Technologies currently exploring

### 4. GitHub Statistics
- Live contribution count (140+ this year)
- Repository count (24 public repos)
- Stars earned
- Contribution consistency graph
- Recent activity timeline
- Featured projects
- Active streak indicator

### 5. Projects Portfolio
- Featured project cards
- Filter by category (All, Web Apps, Mobile Apps, Others)
- Project highlights and technologies
- GitHub links
- Hover animations

### 6. Contact Section
- Contact form with validation
- Location and contact information
- Social media links
- Success message animation

### 7. Footer
- Quick navigation links
- Tech stack used
- Social media icons
- Scroll to top button
- Copyright and inspirational quote

## 🚀 Deployment

### Deploy to GitHub Pages

1. Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     base: '/Portfolio-Website/',
     // ... other config
   });
   ```

2. Build and deploy:
   ```bash
   npm run build
   # Deploy the dist folder to GitHub Pages
   ```

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

## 📊 GitHub Statistics Tracking

The portfolio showcases consistent GitHub activity:

- **140+ Contributions** this year
- **24 Public Repositories**
- **Active Developer** badge
- Monthly contribution visualization
- Recent activity feed
- Featured projects with stars

## 🎯 Customization

To customize for your own portfolio:

1. **Update Personal Info**: Edit `src/components/Hero.jsx`, `About.jsx`, `Contact.jsx`
2. **Modify Skills**: Update skills array in `src/components/Skills.jsx`
3. **Add Projects**: Edit projects array in `src/components/Projects.jsx`
4. **Update GitHub Stats**: Replace username in `src/components/GitHubStats.jsx`
5. **Change Colors**: Modify CSS variables in `src/index.css`
6. **Add Your CV**: Place your CV in `public/` folder

## 👨‍💻 Author

**Shajedul Kabir Rafi**

- GitHub: [@Rafi12234](https://github.com/Rafi12234)
- Facebook: [shajidul.kabir.5](https://www.facebook.com/shajidul.kabir.5)
- Instagram: [@___r_._a_._f_._i___](https://www.instagram.com/___r_._a_._f_._i___/)
- Location: Dhaka, Bangladesh 🇧🇩

## 🙏 Acknowledgments

- Design inspiration from CareerPath platform
- Icons from React Icons
- Animations powered by Framer Motion
- Built with React and Vite

---

Made with ❤️ and lots of ☕ by Shajedul Kabir Rafi

⭐ Star this repository if you like it!