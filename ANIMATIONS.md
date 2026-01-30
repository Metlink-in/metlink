# MetLink - Animated Portfolio Website

A modern, fully-animated portfolio website for MetLink software company, built with Next.js, React, and Tailwind CSS.

## Features

### ✨ Full Page Navigation
- **Home** - Hero section with animated cards and projects showcase
- **Services** - Complete service offerings with hover animations
- **Projects** - Interactive carousel showcasing featured projects
- **Team** - Meet the talented team members
- **About** - Company mission, vision, and values
- **Contact** - Contact form with validation
- **404** - Beautiful error page with animations

### 🎬 Advanced Animations
The site includes extensive animations built entirely with Tailwind CSS:

#### Core Animations
- **slideInUp** - Smooth entrance from bottom
- **slideInDown** - Entrance from top
- **slideInLeft** - Entrance from left
- **slideInRight** - Entrance from right
- **fadeInScale** - Fade with scale transformation
- **bounceIn** - Bounce entrance effect
- **float** - Continuous floating motion
- **glow** - Glowing shadow effect
- **blob** - Organic blob morphing animation
- **pulseGlow** - Pulsing glow effect
- **textShine** - Text shimmer animation

#### Implementation Examples

```tsx
// Using slideInUp animation
<div className="animate-slideInUp">
  <h1>Welcome</h1>
</div>

// With staggered delay
<div className="animate-slideInUp" style={{ animationDelay: '100ms' }}>
  <p>Content appears after delay</p>
</div>

// Multiple animations combined
<div className="animate-float animate-glow">
  <Card>Floating glowing card</Card>
</div>
```

### 🎨 Design System
- **Dark Theme**: Professional dark color scheme
- **Primary Color**: Blue gradient (oklch 0.6 0.2 250)
- **Accent**: Vibrant accent colors for highlights
- **Responsive**: Mobile-first design that scales to all devices

### 📱 Components

#### Header Navigation
- Fixed navigation bar with smooth scroll effects
- Mobile hamburger menu
- Active state indicators
- Smooth transitions

#### Hero Section
- Animated floating cards
- Gradient background effects
- Call-to-action buttons
- Scroll indicator

#### Service Cards
- Staggered entrance animations
- Hover state transitions
- Icon animations
- Background gradient effects

#### Project Carousel
- Interactive carousel navigation
- Smooth transitions between slides
- Stats display
- Technology stack showcase

#### Stats Section
- Animated number counters
- Scale-in animations
- Hover border effects
- Gradient backgrounds

#### Team Section
- Member cards with hover effects
- Social media links
- Staggered animations
- Role and specialty display

#### Contact Form
- Form validation
- Success feedback animation
- Input focus effects
- Smooth submissions

### 🛠️ Technical Stack

- **Framework**: Next.js 16
- **Styling**: Tailwind CSS v4
- **Animations**: Pure CSS keyframes
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Language**: TypeScript

### 📁 Project Structure

```
/app
  ├── page.tsx                 # Home page
  ├── layout.tsx               # Root layout with navigation
  ├── globals.css              # Global styles and animations
  ├── not-found.tsx            # 404 error page
  ├── /services/page.tsx       # Services page
  ├── /projects/page.tsx       # Projects page
  ├── /team/page.tsx           # Team page
  ├── /about/page.tsx          # About page
  └── /contact/page.tsx        # Contact page

/components
  ├── header.tsx               # Navigation component
  ├── page-transition.tsx      # Page transition wrapper
  ├── /sections/
  │   ├── hero.tsx             # Hero section
  │   ├── services.tsx         # Services section
  │   ├── projects.tsx         # Projects carousel
  │   ├── stats.tsx            # Stats with counters
  │   ├── team.tsx             # Team members
  │   ├── cta.tsx              # Call-to-action
  │   └── footer.tsx           # Footer
  └── /ui/                      # shadcn/ui components

/hooks
  ├── use-mobile.ts            # Mobile detection hook
  ├── use-toast.ts             # Toast notifications
  └── use-in-view.ts           # Scroll animation hook

/lib
  └── utils.ts                 # Utility functions
```

### 🚀 Getting Started

#### Installation
```bash
# Clone the repository
git clone <repository-url>
cd metlink

# Install dependencies
npm install

# Run development server
npm run dev
```

#### Build for Production
```bash
npm run build
npm start
```

### 🎯 Animation Customization

Edit `/app/globals.css` to customize animations:

```css
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);    /* Adjust starting position */
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@layer utilities {
  .animate-slideInUp {
    animation: slideInUp 0.6s ease-out;  /* Adjust duration and timing */
  }
}
```

### 📝 Component Animation Examples

#### Service Cards with Staggered Animation
```tsx
{services.map((service, index) => (
  <div
    key={index}
    style={{ animation: `slideInUp 0.6s ease-out ${index * 0.1}s both` }}
  >
    {/* Card content */}
  </div>
))}
```

#### Hover Animation Effects
```tsx
<div className="group hover:border-primary transition-all duration-300">
  <div className="group-hover:scale-110 transition-transform duration-300">
    {/* Content */}
  </div>
</div>
```

#### Scroll-triggered Animations
```tsx
export function useInView() {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
      }
    });
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isInView] as const;
}
```

### 🎪 Performance Optimization

- **CSS Animations**: Pure CSS for 60fps performance
- **Lazy Loading**: Components load on demand
- **Image Optimization**: Next.js image optimization
- **Bundle Size**: Optimized Tailwind CSS builds
- **Mobile First**: Responsive design approach

### 🔧 Customization

#### Change Primary Color
Edit `:root` in `/app/globals.css`:
```css
:root {
  --primary: oklch(0.6 0.2 250);  /* Change this value */
}
```

#### Adjust Animation Timing
Modify keyframe animations in `/app/globals.css` to speed up/slow down animations.

#### Add New Pages
1. Create new directory in `/app`
2. Add `page.tsx` with your content
3. Update header navigation in `/components/header.tsx`

### 📱 Responsive Design

- **Mobile**: Optimized for small screens
- **Tablet**: Enhanced layout for medium screens
- **Desktop**: Full featured experience on large screens

### 🌟 Best Practices Used

1. **Semantic HTML**: Proper semantic elements throughout
2. **Accessibility**: ARIA labels and keyboard navigation
3. **Performance**: Optimized CSS and lazy loading
4. **Type Safety**: Full TypeScript coverage
5. **Component Structure**: Reusable, modular components
6. **Animation Performance**: GPU-accelerated transforms

### 📚 Resources

- [Next.js Documentation](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Lucide Icons](https://lucide.dev)

### 📄 License

This project is part of MetLink's official website and is proprietary.

---

Built with ❤️ using Next.js, React, and Tailwind CSS
