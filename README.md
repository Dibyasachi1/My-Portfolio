# Modern Portfolio Website

A modern, creative, and responsive personal portfolio website built with Next.js, React, TypeScript, and Tailwind CSS. Features smooth animations, dark/light mode, and a beautiful UI design.

## ✨ Features

- **Modern Design**: Clean, elegant, and aesthetic UI with smooth transitions
- **Responsive**: Fully responsive for mobile, tablet, and desktop
- **Dark/Light Mode**: Toggle between dark and light themes
- **Smooth Animations**: Framer Motion animations and micro-interactions
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **SEO Optimized**: Meta tags and Open Graph support

## 🚀 Sections

- **Hero Section**: Eye-catching introduction with animated background
- **About Me**: Bio, skills showcase, and downloadable resume
- **Projects**: Grid layout with project cards and filtering
- **Contact**: Contact form and social media links
- **Footer**: Minimal footer with social links

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Personal Information
Update the following files with your information:

1. **`src/data/social.ts`** - Update social media links
2. **`src/data/projects.ts`** - Add your projects
3. **`src/data/skills.ts`** - Update your skills
4. **`src/app/layout.tsx`** - Update metadata and title
5. **`public/resume.pdf`** - Replace with your actual resume

### Styling
- Colors and themes can be customized in `src/app/globals.css`
- Component styles are in individual component files
- Tailwind configuration is in `tailwind.config.js`

### Content
- Update the hero section text in `src/components/sections/hero.tsx`
- Modify the about section content in `src/components/sections/about.tsx`
- Add your projects in `src/data/projects.ts`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📁 Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── sections/       # Page sections
│   └── ui/            # Reusable UI components
├── data/              # Static data
├── types/             # TypeScript type definitions
└── utils/             # Utility functions
```

## 🎯 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for best user experience
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for better performance

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📧 Contact

Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)
