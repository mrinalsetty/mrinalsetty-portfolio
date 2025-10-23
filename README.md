# Mrinal Setty - Portfolio

A modern, responsive portfolio website built with Next.js 15 and React 19, showcasing professional experience, projects, achievements, and skills in GenAI engineering and full-stack development.

## 🌟 Live Demo

Visit the live portfolio: [https://mrinalsetty.com](https://mrinalsetty.com)

## 🚀 Features

### Interactive Design

- **Smooth Animations**: Subtle hover effects and transitions throughout
- **Profile Picture Modal**: Click to view expanded profile image with Escape key support
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Glassmorphism effects and blue-cyan gradient theme

### Dynamic Content

- **Hero Section**: Interactive 2x2 grid layout with profile, quick actions, and expertise
- **Experience Timeline**: Professional work history with detailed descriptions
- **Project Showcase**: Featured projects with IEEE publications and research
- **Skills Matrix**: Categorized technical skills with interactive tags
- **Achievements**: Professional accomplishments and certifications
- **Activities**: Personal interests and extracurricular activities

### Technical Excellence

- **Next.js 15**: Latest framework with App Router
- **React 19**: Modern React with concurrent features
- **TypeScript**: Type-safe development
- **Tailwind CSS v4**: Utility-first styling with custom design system
- **SEO Optimized**: Meta tags, structured data, and performance optimization

## 🛠️ Tech Stack

- **Framework**: Next.js 15.1.3
- **Frontend**: React 19.2.0, TypeScript 5.7.2
- **Styling**: Tailwind CSS v4.0.0-alpha.31
- **Development**: ESLint, PostCSS
- **Deployment**: Vercel

## 📋 Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

## 🏗️ Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/mrinalsetty/mrinalsetty-portfolio.git
cd mrinalsetty-portfolio
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000) to see the portfolio.

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx            # Main page with section imports
├── components/
│   ├── Navbar.tsx          # Navigation component
│   ├── sections/           # Individual page sections
│   │   ├── HeroSection.tsx        # Hero with profile and quick actions
│   │   ├── ExperienceSection.tsx  # Work experience timeline
│   │   ├── ProjectsSection.tsx    # Featured projects
│   │   ├── AchievementsSection.tsx # Professional achievements
│   │   ├── EducationSection.tsx   # Academic background
│   │   ├── ActivitiesSection.tsx  # Personal activities
│   │   ├── SkillsSection.tsx     # Technical skills
│   │   ├── CertificationsSection.tsx # Certifications
│   │   └── ContactSection.tsx    # Contact information
│   └── ui/                 # Reusable UI components
├── data/
│   └── constants.ts        # Portfolio content and data
└── types/
    └── index.ts           # TypeScript type definitions
```

## 🎨 Customization

### Personal Information

Update your details in `src/data/constants.ts`:

- Personal info (name, title, description)
- Experience and education
- Projects and achievements
- Skills and certifications
- Contact information

### Styling

- **Colors**: Modify the blue-cyan gradient theme in `globals.css`
- **Components**: Update individual section styling in their respective files
- **Layout**: Adjust grid layouts and spacing in section components

### Content Sections

The portfolio includes these main sections:

1. **Home** - Hero section with profile and quick actions
2. **Experience** - Professional work history
3. **Projects** - Featured projects and publications
4. **Achievements** - Professional accomplishments
5. **Education** - Academic background
6. **Activities** - Personal interests and activities
7. **Skills** - Technical expertise
8. **Certifications** - Professional certifications

## 📱 Responsive Design

- **Desktop**: Full layout with sidebar navigation
- **Tablet**: Adapted grid layouts and navigation
- **Mobile**: Stacked layout with touch-friendly interactions

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Other Platforms

The portfolio can be deployed to any platform that supports Node.js:

- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Mrinal Setty**

- Email: mrinalsetty2000@gmail.com
- LinkedIn: [linkedin.com/in/mrinalsetty](https://linkedin.com/in/mrinalsetty)
- GitHub: [github.com/mrinalsetty](https://github.com/mrinalsetty)

---

Built using Next.js, React, and TypeScript
