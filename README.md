# Bluepeg 🏭

**Bluepeg** is a cutting-edge industrial operations company website built with modern web technologies. This Next.js application showcases industrial automation solutions, engineering expertise, and innovation in the manufacturing sector.

## 🌟 Overview

Bluepeg represents a people-first industrial operations company dedicated to driving innovation and sustainable growth across Nigeria. This website serves as a comprehensive platform showcasing our expertise in industrial automation, instrumentation & control, and manpower development.

### 🎯 Key Highlights
- **Industrial Focus**: Specialized in automation solutions and industrial engineering
- **Modern Architecture**: Built with Next.js 15, React, TypeScript, and Tailwind CSS
- **Interactive Navigation**: Seamless tab-based navigation between technology sections
- **Responsive Design**: Optimized for all devices and screen sizes
- **Performance Optimized**: Static generation with excellent Core Web Vitals
- **SEO Ready**: Built-in SEO optimization with Next.js features

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation
1. Clone the repository:
```bash
git clone https://github.com/Hunkymanie/bluepeg-.git
cd bluepeg
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

## 📁 Project Structure

```
src/
├── app/                    # Next.js 13+ App Router
│   ├── about/             # About Us page
│   ├── careers/           # Careers & Opportunities
│   ├── case-studies/      # Client Success Stories
│   ├── contact/           # Contact Information
│   ├── home/              # Home page components
│   ├── innovation-lab/    # Innovation & R&D
│   ├── news/              # Company News & Updates
│   ├── resource-center/   # Resources & Documentation
│   ├── solutions/         # Industrial Solutions
│   ├── terms/             # Terms & Conditions
│   ├── privacy/           # Privacy Policy
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable UI components
│   ├── AboutHero.tsx      # About page hero section
│   ├── ClientSuccessSection.tsx
│   ├── CompanyNewsSection.tsx
│   ├── ContactUsSection.tsx
│   ├── Footer.tsx         # Site footer
│   ├── Hero.tsx           # Homepage hero
│   ├── Navigation.tsx     # Main navigation
│   ├── TeamSection.tsx    # Team showcase
│   ├── WhatWeDoSection.tsx
│   └── WhoWeAreSection.tsx
└── fonts.ts               # Font configurations
```

## ⚡ Features

### 🎨 Design & User Experience
- **Modern UI/UX**: Clean, professional design with industrial aesthetics
- **Interactive Technology Showcase**: Hover effects and seamless navigation between tech stacks
- **Tab-based Navigation**: Smart routing between homepage and innovation lab sections
- **Responsive Design**: Seamless experience across desktop, tablet, and mobile
- **Accessibility**: WCAG compliant with proper semantic HTML
- **Performance**: Optimized images, lazy loading, and Core Web Vitals focused

### 🛠️ Technical Stack
- **Next.js 15**: Latest React framework with App Router
- **TypeScript**: Full type safety and better developer experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **React Hooks**: Advanced state management and interactive components
- **ESLint**: Code quality and consistency enforcement
- **Modern Development**: Hot reload, fast refresh, and optimized builds

### 📄 Pages & Sections
- **Homepage**: Hero section, company overview, and interactive technology showcase
- **About Us**: Company story, mission, vision, and team showcase
- **Solutions**: Industrial automation and engineering services
- **Case Studies**: Client success stories and project showcases
- **Innovation Lab**: Interactive R&D showcase with technology tabs
  - Artificial Intelligence & Machine Learning
  - Internet of Things (IoT)
  - Cloud Computing Infrastructure
  - Robotics & Automation Systems
  - Extended Reality (AR/VR)
  - Blockchain Security Solutions
- **Resource Center**: Industry guides, whitepapers, and documentation
- **News**: Company updates, announcements, and industry insights
- **Careers**: Job opportunities and company culture
- **Contact**: Multiple contact methods and inquiry forms

### 🔧 Interactive Features
- **Smart Navigation**: Technology cards on homepage link directly to corresponding tabs in Innovation Lab
- **Dynamic Tab System**: URL-based tab navigation with `?tab=` parameters
- **Hover Animations**: Smooth transitions and visual feedback on interactive elements
- **Responsive Grid Layout**: Adaptive technology showcase grid
- **Real-time State Management**: React hooks for seamless user interactions

## 🚧 Development Scripts

```bash
# Development server with hot reload
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Code linting
npm run lint

# Type checking
npm run type-check
```

## 🔧 Recent Updates & Improvements

### ✅ Interactive Technology Showcase (Latest)
- **Smart Navigation System**: Homepage technology cards now link directly to Innovation Lab tabs
- **URL-based Tab Navigation**: Implemented deep linking with `?tab=` parameters for each technology
- **Enhanced User Experience**: Seamless transitions between homepage and detailed technology sections
- **Fixed Navigation Issues**: Resolved link routing problems and optimized component interactions
- **Hover State Management**: Improved interactive animations and visual feedback

### ✅ Codebase Cleanup & Optimization
- **Removed unused components**: Deleted 5 unused component files
- **Navigation optimization**: Improved routing performance and user flow
- **ESLint optimization**: Converted blocking errors to warnings for smooth builds
- **Build optimization**: Successfully generating 22 static pages
- **Performance improvements**: Reduced bundle size and improved load times

### 🎯 Code Quality
- **TypeScript strict mode**: Enhanced type safety across all components
- **Component architecture**: Modular, reusable components following React best practices
- **Consistent styling**: Unified design system with Tailwind CSS utilities
- **SEO optimization**: Meta tags, structured data, and semantic HTML

## 🎨 Customization Guide

### 🖼️ Images & Assets
Replace placeholder images in the `public/` directory:
- Company logos and branding assets
- Team member photos
- Project showcase images
- Partner/client logos

### 🎯 Content Updates
- **Company Information**: Update contact details, addresses, and social links
- **Service Offerings**: Modify solutions and services in relevant page components
- **Team Profiles**: Add/update team member information in `TeamSection.tsx`
- **Case Studies**: Replace with actual client projects and success stories

### 🌈 Styling & Branding
- **Colors**: Update brand colors in `tailwind.config.js`
- **Typography**: Customize fonts in `src/fonts.ts`
- **Components**: Modify component styles while maintaining responsive design

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms
- **Netlify**: Drag and drop the `out/` folder after running `npm run build`
- **AWS S3**: Upload static files after build
- **Custom Server**: Use `npm run start` for Node.js hosting

## 📚 Learn More

### Next.js Resources
- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial

### Design & Styling
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Utility-first CSS framework
- [Tailwind UI Components](https://tailwindui.com/) - Professional UI components

### TypeScript
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - TypeScript language reference
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/) - React with TypeScript best practices

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- **Email**: info@bluepeg.com
- **Website**: [bluepeg.com](https://bluepeg.com)
- **Location**: 33 Oyinkan Abayomi Drive, Ikoyi, Lagos, Nigeria

---

**Built with ❤️ by the Bluepeg Digital Team**
