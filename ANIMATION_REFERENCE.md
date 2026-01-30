# Animation Reference Card

## Quick Animation Library

### Basic Usage
```tsx
<div className="animate-slideInUp">Content</div>

// With delay
<div 
  className="animate-slideInUp"
  style={{ animationDelay: '100ms' }}
>
  Delayed content
</div>

// Infinite animation
<div className="animate-float">Floating element</div>
```

## Available Animations

### Entrance Animations (One-time)

| Animation | Duration | Direction | Best For |
|-----------|----------|-----------|----------|
| `animate-slideInUp` | 0.6s | Bottom → Top | General entrance |
| `animate-slideInDown` | 0.6s | Top → Bottom | Page transitions |
| `animate-slideInLeft` | 0.6s | Left → Right | Side content |
| `animate-slideInRight` | 0.6s | Right → Left | Side content |
| `animate-fadeInScale` | 0.5s | Scale + Fade | Card content |
| `animate-bounceIn` | 0.6s | Bounce | Attention grabber |

### Continuous Animations (Infinite)

| Animation | Duration | Effect | Best For |
|-----------|----------|--------|----------|
| `animate-float` | 3s | Up/down drift | Cards, buttons |
| `animate-glow` | 3s | Shadow pulse | Highlights |
| `animate-blob` | 7s | Shape morph | Backgrounds |
| `animate-pulseGlow` | 2s | Expanding glow | Focus areas |
| `animate-rotationSpin` | 2s | 360° rotation | Loading, icons |
| `animate-textShine` | 3s | Text shimmer | Text effects |

## Common Usage Patterns

### 1. Staggered List Animation
```tsx
{items.map((item, index) => (
  <div
    key={index}
    className="animate-slideInUp"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    {item}
  </div>
))}
```

### 2. Hover Effects
```tsx
<div className="group hover:scale-105 transition-transform duration-300">
  <div className="group-hover:text-primary">
    Hover to change
  </div>
</div>
```

### 3. Conditional Animation
```tsx
<div className={isVisible ? 'animate-slideInUp' : 'opacity-0'}>
  Content
</div>
```

### 4. Combined Animations
```tsx
<div className="animate-float animate-glow">
  Floating and glowing
</div>
```

### 5. Scroll-Triggered Animation
```tsx
const [ref, isInView] = useInView();
return (
  <div ref={ref} className={isInView ? 'animate-slideInUp' : ''}>
    Animates when visible
  </div>
);
```

## Timing Functions

```css
/* Available Tailwind timing functions */
ease-linear      /* Constant speed */
ease-in          /* Slow start */
ease-out         /* Slow end */
ease-in-out      /* Slow start and end */
```

## Custom Durations

```tsx
<div 
  style={{
    animation: 'slideInUp 1s ease-out',  // Custom duration
    animationDelay: '200ms'               // Delay
  }}
>
  Custom timed animation
</div>
```

## Animation Delays

```tsx
// Multiple items with increasing delays
{items.map((_, i) => (
  <div 
    key={i}
    className="animate-slideInUp"
    style={{ animationDelay: `${i * 150}ms` }}
  />
))}
```

## Color Transitions

```tsx
// Smooth color changes
<div className="hover:text-primary transition-colors duration-300">
  Hover to change color
</div>

// Multiple properties
<div className="hover:bg-primary hover:scale-110 transition-all duration-300">
  Multiple effects
</div>
```

## Keyframe Examples

### Float Animation (Already included)
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
}
```

### Custom Animation
```css
@keyframes customFade {
  from { opacity: 0; }
  to { opacity: 1; }
}

@layer utilities {
  .animate-customFade {
    animation: customFade 0.5s ease-out;
  }
}
```

## Performance Tips

✅ Use `transform` and `opacity` (GPU-accelerated)
✅ Avoid animating `width`, `height`, `margin`
✅ Use CSS animations, not JavaScript
✅ Limit animations on mobile devices
✅ Use `will-change` for complex animations

```css
/* Good - GPU accelerated */
transform: translateY(20px);
opacity: 0.5;

/* Bad - Repaints/reflows */
top: 20px;
height: 100px;
```

## Animation Checklist

- [ ] Animations don't block interaction
- [ ] Performance is smooth (60fps)
- [ ] Animations enhance UX
- [ ] Timing feels natural
- [ ] Delays create rhythm
- [ ] Works on mobile
- [ ] Accessible (respects prefers-reduced-motion)

## Common Issues & Solutions

### Animation Not Playing
```tsx
// Make sure it's properly imported
import './globals.css'; // ✅

// Check class name spelling
className="animate-slideInUp" // ✅
className="slideInUp" // ❌
```

### Animation Too Fast/Slow
```tsx
// Adjust in globals.css
animation: slideInUp 0.6s ease-out; // Change 0.6s
```

### Animation Repeating
```tsx
// Use one-time animations for entrance
className="animate-slideInUp" // One time

// Use infinite for continuous
className="animate-float" // Infinite
```

### No Animation on Page Load
```tsx
// Option 1: Use state
const [isVisible, setIsVisible] = useState(false);
useEffect(() => setIsVisible(true), []);

// Option 2: Delay ensures it triggers
style={{ animationDelay: '100ms' }}
```

## Animation Timing Guide

- **Fast** (0.3s - 0.5s): Interactive feedback, simple transitions
- **Standard** (0.6s - 0.8s): Page entrance, card reveals
- **Slow** (1s - 1.5s): Important notices, emphasis
- **Very Slow** (2s+): Continuous background, decorative

## Accessibility Considerations

```tsx
// Respect user preferences
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Browser DevTools Tips

**Chrome DevTools:**
1. Open Elements tab
2. Select element
3. Open Animations panel
4. See running animations
5. Slow down/speed up playback

**Firefox DevTools:**
1. Inspect element
2. Open Inspector
3. Check animation timeline
4. Pause/resume animations

## Most Common Combinations

```tsx
// Hero entrance
className="animate-slideInUp text-balance"

// Card hover
className="hover:scale-105 hover:border-primary transition-all"

// Service cards (staggered)
style={{ animationDelay: `${index * 100}ms` }}
className="animate-slideInUp"

// Floating element
className="animate-float animate-glow"

// Button click feedback
className="hover:opacity-80 active:scale-95 transition-all"
```

## Real-World Examples from MetLink

### Hero Cards
```tsx
className="animate-float"
style={{ animationDelay: '0s' }}
// Creates staggered floating effect
```

### Service Cards
```tsx
className="group hover:border-blue-500 transition-all"
// Color and border animation on hover
```

### Stats Counter
```tsx
className="animate-fadeInScale"
// Scales in with fade effect
```

### Team Members
```tsx
style={{ animationDelay: `${index * 100}ms` }}
className="animate-slideInUp"
// Sequential entrance animation
```

---

## Quick Reference

| Need | Solution |
|------|----------|
| Page entrance | `animate-slideInUp` |
| Card reveal | `animate-fadeInScale` |
| Attention | `animate-bounceIn` |
| Continuous | `animate-float` |
| Highlight | `animate-glow` |
| Loading | `animate-rotationSpin` |
| Background | `animate-blob` |
| Hover effect | `hover:scale-110` + `transition-all` |
| Stagger items | `style={{ animationDelay: \`${i*100}ms\` }}` |
| Fast | `0.3s - 0.5s` |

---

**Print this card for quick reference while coding!** 📌
