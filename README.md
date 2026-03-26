# Diya Patel - Modern Portfolio Website

A stunning, modern, and responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, beautiful design, and comprehensive project showcase.

## 🚀 Features

### ✨ Design & Animations
- **Modern Glassmorphism Design** - Beautiful gradient backgrounds and frosted glass effects
- **Smooth Animations** - Powered by Framer Motion with scroll-triggered reveals
- **Typing Animation** - Dynamic hero section with animated text
- **Hover Effects** - Interactive elements with smooth transitions
- **Responsive Design** - Perfect on mobile, tablet, and desktop

### 🎯 Sections
- **Animated Hero Section** - With typing animation and gradient text
- **About Me** - Comprehensive overview with skill stats
- **Skills Showcase** - Interactive skill cards with progress bars
- **Projects Gallery** - Beautiful project cards with hover animations
- **Contact Form** - Functional contact form with validation
- **Scroll-to-Top Button** - Convenient navigation helper

### 🛠️ Technical Features
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Router** for navigation
- **ShadCN UI Components** for consistent design
- **Fully Responsive** - Mobile-first approach

## 📦 Technologies Used

- **Frontend**: React, TypeScript, Vite
- **Styling**: Tailwind CSS, CSS Modules
- **Animations**: Framer Motion
- **UI Components**: ShadCN UI
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **State Management**: TanStack Query (for future API integrations)

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/diyahrp19/diya-patel-portfolio.git
   cd diya-patel-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:8081`

## 📱 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🎨 Color Palette

The portfolio uses a beautiful gradient color scheme:
- **Primary**: Blue to Purple gradient (`#3b82f6` to `#8b5cf6`)
- **Secondary**: Complementary colors for different sections
- **Background**: Clean white with subtle gradients
- **Text**: High contrast for accessibility

## 📱 Responsive Breakpoints

- **Mobile**: `< 640px` - Optimized for phones
- **Tablet**: `640px - 1024px` - Tablet-friendly layout
- **Desktop**: `> 1024px` - Full desktop experience

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com/)
3. Vercel will automatically detect the Vite configuration
4. Your site will be deployed with a custom domain

### Netlify
1. Push your code to GitHub
2. Connect your repository to [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy!

### GitHub Pages
1. Build the project: `npm run build`
2. Push the `dist` folder to your repository
3. Enable GitHub Pages in repository settings

## 📁 Project Structure

```
src/
├── components/           # Reusable components
│   ├── AnimatedSection/  # Animation wrapper
│   ├── Navigation/       # Animated navbar
│   ├── Hero/            # Hero section with typing
│   ├── About/           # About section
│   ├── Skills/          # Skills showcase
│   ├── Projects/        # Project gallery
│   ├── Contact/         # Contact form
│   └── ScrollToTop/     # Scroll helper
├── pages/               # Main page components
├── lib/                 # Utility functions
└── App.tsx             # Main app component
```

## 🔧 Customization

### Updating Content
- **Hero Section**: Edit `src/components/Hero.tsx`
- **About Section**: Edit `src/components/About.tsx`
- **Skills**: Edit `src/components/Skills.tsx`
- **Projects**: Edit `src/components/Projects.tsx`
- **Contact**: Edit `src/components/Contact.tsx`

### Styling Changes
- **Colors**: Modify Tailwind config in `tailwind.config.ts`
- **Typography**: Update fonts in `index.html`
- **Animations**: Adjust Framer Motion settings in components

### Adding New Sections
1. Create a new component in `src/components/`
2. Add the section to `src/pages/Index.tsx`
3. Update navigation links in `src/components/Navigation.tsx`

## 🎯 Performance Features

- **Code Splitting**: Automatic with Vite
- **Image Optimization**: Ready for optimized images
- **Lazy Loading**: For better performance
- **Minified Builds**: Production optimization
- **Caching**: Browser caching strategies

## 🔒 Security

- **CSP Headers**: Content Security Policy ready
- **HTTPS**: Works with secure connections
- **Input Validation**: Contact form validation
- **No External Dependencies**: Minimal attack surface

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with ❤️ using React and TypeScript
- Design inspired by modern portfolio trends
- Animations powered by Framer Motion
- Icons from Lucide React
- UI components from ShadCN

## 📞 Contact

For support or questions:
- **Email**: diyahrp05@gmail.com
- **GitHub**: [diyahrp19](https://github.com/diyahrp19)
- **LinkedIn**: [diyapatel19](https://www.linkedin.com/in/diyapatel19)

---

**Built with React, TypeScript, and Tailwind CSS** 🚀