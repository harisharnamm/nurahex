# NurahexAI Brand Design Guidelines

## Overview
This document outlines the comprehensive design system for NurahexAI, an AI automation agency. The brand focuses on cutting-edge technology, innovation, and accessibility, expressed through a modern dark theme with vibrant accent colors.

---

## 🎨 Color System

### Primary Colors
- **Primary 900**: `#B3CC19` (RGB: 179, 204, 25) - Dark lime
- **Primary 700**: `#D7FF1E` (RGB: 215, 255, 30) - **Base Primary** - Bright lime
- **Primary 500**: `#E6FF5A` (RGB: 230, 255, 90) - Light lime
- **Primary 300**: `#F3FF9B` (RGB: 243, 255, 155) - Pale lime
- **Primary Foreground**: `#0A0A0A` (RGB: 10, 10, 10) - Near black

### Accent Colors
- **Accent 600**: `#9FF4F0` (RGB: 159, 244, 240) - Bright cyan
- **Accent 400**: `#C1FAF7` (RGB: 193, 250, 247) - Light cyan

### Surface Colors (Dark Theme Base)
- **Surface 950**: `#000000` (RGB: 0, 0, 0) - Pure black
- **Surface 900**: `#0A0A0A` (RGB: 10, 10, 10) - Near black (primary background)
- **Surface 700**: `#181818` (RGB: 24, 24, 24) - Dark gray (secondary background)
- **Surface 600**: `#262626` (RGB: 38, 38, 38) - Medium dark gray
- **Surface 400**: `#363636` (RGB: 54, 54, 54) - Medium gray
- **Surface 200**: `#555555` (RGB: 85, 85, 85) - Light gray
- **Surface 50**: `#F9F9F9` (RGB: 249, 249, 249) - Near white (text)

### Semantic Colors
- **Success**: `#4ADE80` - Green
- **Info**: `#38BDF8` - Blue
- **Warning**: `#FBBF24` - Yellow
- **Danger**: `#F87171` - Red

### Component-Specific Colors
- **Light Purple**: `rgba(147, 51, 234, 0.15)` with border `rgba(147, 51, 234, 0.3)`
- **Blue**: `rgba(14, 165, 233, 0.15)` with border `rgba(14, 165, 233, 0.3)`
- **Pink**: `rgba(244, 63, 94, 0.15)` with border `rgba(244, 63, 94, 0.3)`
- **Green**: `rgba(16, 185, 129, 0.15)` with border `rgba(16, 185, 129, 0.3)`

### CSS Variables & Usage
```css
/* Primary gradients */
--gradient-primary: linear-gradient(135deg, #d7ff1e 0%, #9ff4f0 100%);

/* Shadows */
--shadow-primary: 0 0 16px rgba(215, 255, 30, 0.45);
--shadow-accent: 0 0 12px rgba(159, 244, 240, 0.35);

/* Glass morphism */
--glass-bg: rgba(255, 255, 255, 0.05);
--glass-border: rgba(255, 255, 255, 0.1);
--overlay-scrim: rgba(10, 10, 10, 0.72);
```

---

## 📖 Typography

### Font Families
- **Heading Font**: Space Grotesk (`var(--font-space-grotesk)`)
- **Body Font**: Inter (`var(--font-inter)`)
- **Sans Font**: Inter (fallback)

### Font Sizes & Hierarchy

#### Heading Scales
- **H1**: `text-5xl md:text-6xl lg:text-7xl` (80px-112px on large screens)
- **H2**: `text-4xl md:text-5xl lg:text-6xl` (64px-96px on large screens)
- **H3**: `text-3xl md:text-4xl` (48px-64px on large screens)
- **H4**: `text-2xl md:text-3xl` (32px-48px on large screens)
- **H5**: `text-xl md:text-2xl` (24px-32px on large screens)
- **H6**: `text-lg md:text-xl` (20px-24px on large screens)

#### Body Text Scales
- **Large**: `text-xl` (20px) - Used for hero subtitles, section descriptions
- **Base**: `text-lg` (18px) - Primary body text
- **Medium**: `text-base` (16px) - Secondary body text
- **Small**: `text-sm` (14px) - Labels, captions, form labels
- **Extra Small**: `text-xs` (12px) - Tags, badges, metadata

#### Font Weights
- **Bold**: `font-bold` (700) - Headlines, important text
- **Semibold**: `font-semibold` (600) - Subheadings, emphasis
- **Medium**: `font-medium` (500) - Button text, labels
- **Regular**: `font-normal` (400) - Body text

### Typography Usage Examples
```tsx
// Hero headline
<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">

// Section title
<h2 className="text-3xl md:text-4xl font-bold mb-4">

// Body text
<p className="text-lg text-surface-50/80">

// Small label
<label className="block text-sm font-medium mb-2">
```

---

## 📐 Spacing & Layout

### Spacing Scale (Tailwind Units)
- **xs**: `space-x-1, space-y-1` (4px)
- **sm**: `space-x-2, space-y-2` (8px)
- **md**: `space-x-3, space-y-3` (12px)
- **lg**: `space-x-4, space-y-4` (16px)
- **xl**: `space-x-6, space-y-6` (24px)
- **2xl**: `space-x-8, space-y-8` (32px)
- **3xl**: `space-x-12, space-y-12` (48px)

### Padding Standards
- **Component Internal**: `p-6` (24px) - Standard card/component padding
- **Large Components**: `px-10 py-12 md:px-16 md:py-16` - CTA sections
- **Small Components**: `px-2.5 py-0.5` - Tags, badges
- **Buttons**: `px-4 py-2` (default), `px-6 py-2` (primary), `px-8` (large)

### Margin Standards
- **Section Spacing**: `py-20, py-24` (80px-96px) - Between major sections
- **Component Spacing**: `mb-6, mb-8, mb-12` (24px-48px) - Between components
- **Text Spacing**: `mb-4, mb-6` (16px-24px) - Between text elements

### Container & Grid
- **Container**: `container mx-auto px-6` - Max width with centered alignment
- **Grid Layouts**: 
  - Mobile: `grid-cols-1`
  - Tablet: `md:grid-cols-2`
  - Desktop: `lg:grid-cols-3`, `xl:grid-cols-4`
- **Gap**: `gap-8, gap-12` (32px-48px) for major grids

### Breakpoints
- **Mobile**: Default (0px+)
- **Tablet**: `md:` (768px+)
- **Desktop**: `lg:` (1024px+)
- **Large Desktop**: `xl:` (1280px+)
- **Extra Large**: `2xl:` (1400px max-width)

---

## 🔲 Border Radius

### Radius Scale
- **Base Radius**: `--radius: 24px`
- **Large**: `rounded-lg` (var(--radius)) = 24px
- **Medium**: `rounded-md` (calc(var(--radius) - 6px)) = 18px
- **Small**: `rounded-sm` (calc(var(--radius) - 12px)) = 12px
- **Extra Large**: `rounded-xl` = 12px
- **2XL**: `rounded-2xl` = 16px
- **3XL**: `rounded-3xl` = 24px
- **Full**: `rounded-full` - Pills, circular elements

### Usage Examples
- **Cards**: `rounded-lg` (24px)
- **Buttons**: `rounded-md` (18px) or `rounded-full` for primary CTAs
- **Input Fields**: `rounded-lg` (24px)
- **Tags/Badges**: `rounded-full`
- **Large Containers**: `rounded-[2rem]` (32px) for special components

---

## 🌟 Shadows & Effects

### Shadow System
- **Primary Shadow**: `var(--shadow-primary)` = `0 0 16px rgba(215, 255, 30, 0.45)`
- **Accent Shadow**: `var(--shadow-accent)` = `0 0 12px rgba(159, 244, 240, 0.35)`
- **Medium Shadow**: `shadow-md`
- **Large Shadow**: `shadow-lg`
- **Extra Large**: `shadow-xl`

### Glass Morphism
```css
/* Glass effect for cards */
.glass-card {
  background: var(--glass-bg); /* rgba(255, 255, 255, 0.05) */
  border: 1px solid var(--glass-border); /* rgba(255, 255, 255, 0.1) */
  backdrop-filter: blur(12px);
  backdrop-saturate: 150%;
}
```

### Blur Effects
- **Backdrop Blur**: `backdrop-blur-sm` (4px), `backdrop-blur-md` (12px)
- **Background Blur**: `blur-xl` (24px), `blur-3xl` (64px) for background elements

---

## 🎭 Component Patterns

### Buttons

#### Primary Button
```tsx
className="rounded-full bg-primary-700 text-primary-foreground hover:bg-primary-900 hover:shadow-[var(--shadow-primary)] transition-all duration-300 font-medium px-6 py-2"
```

#### Secondary Button
```tsx
className="bg-secondary text-secondary-foreground hover:bg-secondary/80"
```

#### Ghost Button
```tsx
className="hover:bg-accent hover:text-accent-foreground"
```

### Cards

#### Glass Card
```tsx
className="backdrop-blur-md bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-lg p-6 transition-all duration-200"
```

#### Standard Card
```tsx
className="bg-surface-700 border border-surface-600 rounded-lg p-6"
```

### Tags & Badges

#### Tag Sizes
- **Small**: `px-2 py-0.5 text-xs`
- **Default**: `px-2.5 py-0.5 text-xs`
- **Large**: `px-3 py-1 text-sm`

#### Innovation Color Cycle
Colors cycle through: light-purple → blue → pink → green

---

## 🎨 Gradients & Special Effects

### Primary Gradients
```css
/* Main brand gradient */
background: linear-gradient(135deg, #d7ff1e 0%, #9ff4f0 100%);

/* Hero background */
background: linear-gradient(to-br, primary-700/10, accent-600/10);

/* Hiring section gradient */
background: linear-gradient(to-br, from-primary-900/20, to-primary-700/10);
```

### Aurora Animation
```css
@keyframes slide-aurora {
  0% { transform: translateY(0%); }
  100% { transform: translateY(-10%); }
}
.animate-slide-aurora {
  animation: slide-aurora 14s linear infinite alternate;
}
```

### Grid Overlays
```css
/* Radial grid pattern */
background: radial-gradient(circle at 2px 2px, rgba(255,255,255,0.12) 1px, transparent 0);
background-size: 36px 36px;
```

---

## 🎬 Animation Guidelines

### Transition Standards
- **Default Duration**: `duration-300` (300ms)
- **Fast**: `duration-200` (200ms) - Hover states
- **Slow**: `duration-700` (700ms) - Page transitions
- **Extra Slow**: `duration-1000` (1000ms) - Special effects

### Easing Functions
- **Default**: `ease-out` - Most UI interactions
- **Power2**: `power2.out` - Smooth animations
- **Bounce**: For playful interactions
- **Linear**: For continuous animations (aurora, marquee)

### Common Animation Patterns
```css
/* Hover transform */
.hover-lift {
  transition: transform 0.3s ease-out;
}
.hover-lift:hover {
  transform: translateY(-4px);
}

/* Scale animation */
.hover-scale:hover {
  transform: scale(1.05);
}

/* Glow effect */
.glow-hover:hover {
  box-shadow: var(--shadow-primary);
}
```

---

## 📱 Responsive Design

### Mobile-First Approach
Always start with mobile styles, then enhance for larger screens:

```tsx
// Mobile first
className="text-2xl px-4 py-2 
           md:text-3xl md:px-6 md:py-3 
           lg:text-4xl lg:px-8 lg:py-4"
```

### Common Responsive Patterns
- **Hero Text**: `text-4xl md:text-5xl lg:text-6xl`
- **Grid**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- **Spacing**: `py-12 md:py-16 lg:py-20`
- **Padding**: `px-6 md:px-8 lg:px-12`

---

## ♿ Accessibility Standards

### Color Contrast
- All text meets WCAG AA standards (4.5:1 contrast ratio minimum)
- Important text meets AAA standards (7:1 contrast ratio)

### Focus States
```css
/* Focus ring for interactive elements */
focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
```

### Screen Reader Support
- Always include `sr-only` labels for icons
- Use semantic HTML elements
- Provide alt text for images

---

## 🔧 Implementation Guidelines

### CSS Custom Properties Usage
```css
/* Use CSS variables for consistency */
background: rgb(var(--primary));
color: rgb(var(--foreground));
border: 1px solid hsl(var(--border));
```

### Component Class Naming
- Use utility-first approach with Tailwind
- Create component variants with `cva` (class-variance-authority)
- Follow the pattern: `base styles` + `variants` + `modifiers`

### Performance Considerations
- Use `will-change` for animated elements
- Apply `transform: translateZ(0)` for hardware acceleration
- Implement reduced motion support: `@media (prefers-reduced-motion: reduce)`

---

## 📋 Component Checklist

When creating new components, ensure:

- [ ] Follows established color palette
- [ ] Uses correct typography hierarchy
- [ ] Implements proper spacing standards
- [ ] Includes hover/focus states
- [ ] Supports dark theme (default)
- [ ] Responsive across all breakpoints
- [ ] Accessible with proper ARIA labels
- [ ] Follows animation guidelines
- [ ] Uses CSS variables where appropriate
- [ ] Includes proper documentation

---

## 🚀 Brand Voice & Personality

The NurahexAI brand should feel:
- **Innovative**: Cutting-edge, forward-thinking
- **Accessible**: Professional but approachable
- **Confident**: Authoritative without being intimidating
- **Efficient**: Clean, purposeful, no unnecessary elements
- **Premium**: High-quality, sophisticated design choices

This is reflected in the design through:
- Clean, minimalist layouts
- High contrast for readability
- Smooth, purposeful animations
- Consistent spacing and typography
- Premium glass morphism effects
- Vibrant accent colors that convey energy and innovation

---
*Version: 1.0*
