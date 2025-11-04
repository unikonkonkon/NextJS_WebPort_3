# 📚 Project Structure & Development Guide

## 📋 Table of Contents
- [Project Overview](#project-overview)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Component Architecture](#component-architecture)
- [Development Guide](#development-guide)
- [Configuration Files](#configuration-files)

---

## 🎯 Project Overview

**Project Name:** Next.js Portfolio Website (Test Version)  
**Version:** 0.1.0  
**Type:** Single Page Application (SPA)  
**Framework:** Next.js 15.3.5 with React 19

นี่คือเว็บไซต์ Portfolio ที่สร้างด้วย Next.js และใช้ Magic UI components สำหรับสร้าง animations และ effects ต่างๆ

---

## 🛠 Technology Stack

### Core Technologies
- **Next.js 15.3.5** - React Framework with App Router
- **React 19.0.0** - UI Library
- **TypeScript 5** - Type Safety
- **Tailwind CSS 4** - Utility-First CSS Framework

### Animation & Effects
- **Motion (Framer Motion) 12.23.6** - Animation Library
- **Rough Notation 0.5.1** - Hand-drawn style annotations
- **Three.js 0.179.1** - 3D Graphics
- **@react-three/fiber 9.3.0** - React renderer for Three.js
- **@react-three/drei 10.7.4** - Useful helpers for react-three-fiber
- **Cobe 0.6.4** - 3D Globe component

### UI Components & Utilities
- **Lucide React 0.525.0** - Icon Library
- **Class Variance Authority 0.7.1** - CSS variant management
- **clsx 2.1.1** - Utility for constructing className strings
- **Tailwind Merge 3.3.1** - Merge Tailwind CSS classes

---

## 📁 Project Structure

```
NextJS_WebPort_3/
│
├── src/                          # Source code directory
│   ├── app/                      # Next.js App Router
│   │   ├── favicon.ico          # Site favicon
│   │   ├── globals.css          # Global CSS styles
│   │   ├── layout.tsx           # Root layout component
│   │   └── page.tsx             # Main page component
│   │
│   ├── components/              # React components
│   │   ├── magicui/            # Magic UI animation components
│   │   │   ├── animated-beam.tsx      # Animated beam effects
│   │   │   ├── blur-fade.tsx          # Blur fade animations
│   │   │   ├── globe.tsx              # 3D Globe component
│   │   │   ├── highlighter.tsx        # Text highlighter effects
│   │   │   ├── icon-cloud.tsx         # Icon cloud animation
│   │   │   ├── meteors.tsx            # Meteor shower effect
│   │   │   ├── neon-gradient-card.tsx # Neon gradient card
│   │   │   ├── particles.tsx          # Particle effects
│   │   │   ├── shiny-button.tsx       # Shiny button effect
│   │   │   ├── space-model.tsx        # 3D space model
│   │   │   ├── terminal.tsx           # Terminal component
│   │   │   └── text-animate.tsx       # Text animation effects
│   │   │
│   │   ├── page/               # Page section components
│   │   │   ├── navbar.tsx             # Navigation bar
│   │   │   ├── heroSection.tsx        # Hero/Landing section
│   │   │   ├── skillsSection.tsx      # Skills showcase section
│   │   │   ├── experienceSection.tsx  # Work experience section
│   │   │   ├── projectSection.tsx     # Projects showcase section
│   │   │   └── contactSection.tsx     # Contact form section
│   │   │
│   │   └── ui/                 # Custom UI components
│   │       └── custom.tsx             # Custom background/border
│   │
│   └── lib/                    # Utility libraries
│       └── utils.ts                   # Helper functions (cn, etc.)
│
├── public/                     # Static assets
│   ├── model/                  # 3D models
│   │   └── need_some_space1.glb
│   ├── project/                # Project images
│   └── *.svg, *.png           # Icons and images
│
├── next.config.ts              # Next.js configuration
├── tsconfig.json              # TypeScript configuration
├── package.json               # Dependencies and scripts
├── components.json            # Component configuration
├── eslint.config.mjs          # ESLint configuration
├── postcss.config.mjs         # PostCSS configuration
└── tailwind.config.js         # Tailwind CSS configuration
```

---

## 📦 Dependencies

### Production Dependencies

#### Core Framework
```json
"next": "15.3.5"              // Next.js framework
"react": "^19.0.0"            // React library
"react-dom": "^19.0.0"        // React DOM renderer
```

#### Animation & 3D
```json
"motion": "^12.23.6"          // Framer Motion for animations
"three": "^0.179.1"           // 3D graphics library
"@react-three/fiber": "^9.3.0"  // React renderer for Three.js
"@react-three/drei": "^10.7.4"  // Three.js helpers
"cobe": "^0.6.4"              // 3D globe component
"rough-notation": "^0.5.1"    // Hand-drawn annotations
```

#### UI & Styling
```json
"lucide-react": "^0.525.0"    // Icon library
"class-variance-authority": "^0.7.1"  // CSS variants
"clsx": "^2.1.1"              // className utility
"tailwind-merge": "^3.3.1"   // Tailwind class merger
```

### Development Dependencies

```json
"@types/node": "^20"          // Node.js type definitions
"@types/react": "^19"         // React type definitions
"@types/react-dom": "^19"     // React DOM type definitions
"typescript": "^5"            // TypeScript compiler
"tailwindcss": "^4"           // Tailwind CSS
"@tailwindcss/postcss": "^4"  // Tailwind PostCSS plugin
"eslint": "^9"                // Linter
"eslint-config-next": "15.3.5"  // Next.js ESLint config
"tw-animate-css": "^1.3.5"    // Tailwind animations
```

---

## 🏗 Component Architecture

### 1. App Router Structure (`src/app/`)

#### `layout.tsx`
- Root layout ที่ wrap ทั้งแอปพลิเคชัน
- กำหนด metadata (title, description)
- Import global styles
- ใช้ Geist font families

#### `page.tsx`
- Main page component
- นำเข้าและจัดวาง sections ต่างๆ
- ใช้ scroll-based navigation

### 2. Page Sections (`src/components/page/`)

#### `navbar.tsx`
**Features:**
- Sticky navigation bar
- Scroll-based active section detection
- Mobile responsive with hamburger menu
- Smooth scroll to sections
- Glassmorphism effect

**Key States:**
- `isOpen` - Mobile menu state
- `activeSection` - Current active section
- `isScrolled` - Scroll state for styling

#### `heroSection.tsx`
**Features:**
- Landing page với animated text
- 3D space model background
- Interactive globe
- Terminal animation
- Call-to-action buttons

**Components Used:**
- Particles effect
- SpaceModel (Three.js)
- Globe (Cobe)
- TextAnimate
- Highlighter
- Terminal with typing animation

#### `skillsSection.tsx`
**Features:**
- Animated skill cards
- Icon cloud visualization
- Animated beams connecting cards
- Categorized skills (Languages, Frameworks, Tools, etc.)

**Components Used:**
- AnimatedBeam
- IconCloud
- BlurFade animations

**Skill Categories:**
1. Languages
2. Frameworks & Libraries
3. Testing & API Tools
4. AI Tools
5. DevOps & CI/CD Tools
6. Databases & Data Tools
7. Design & Tools
8. Soft Skills

#### `experienceSection.tsx`
**Features:**
- Timeline layout
- Work experience cards
- Animated timeline points
- Starfield background

**Data Structure:**
```typescript
{
  company: string
  role: string
  date: string
  responsibilities: string[]
}
```

#### `projectSection.tsx`
**Features:**
- Tabbed interface (Personal/Work projects)
- Image gallery with modal viewer
- Project cards with hover effects
- Keyboard navigation for gallery
- Color scheme variants

**Project Types:**
```typescript
interface PersonalProject {
  title: string
  role: string
  description: string
  image: string
  slideImages?: string[]
  technologies: string[]
  githubUrl?: string
  githubUrlFrontend?: string
  githubUrlBackend?: string
  demoUrl?: string
  featured?: boolean
  colorScheme: ColorScheme
}

interface WorkProject {
  title: string
  role: string
  description: string
  technologies: string[]
  features: string[]
  icon: string
  colorScheme: ColorScheme
  demoUrl?: string
}
```

#### `contactSection.tsx`
**Features:**
- Contact form
- Social media links
- Contact information display
- Form validation
- Animated background

**Form Fields:**
- Name
- Email
- Message

### 3. Magic UI Components (`src/components/magicui/`)

#### Animation Components

**animated-beam.tsx**
- แสดงเส้นเชื่อมต่อแบบ animated ระหว่าง elements
- ใช้ SVG paths
- Gradient animations

**blur-fade.tsx**
- Fade in animation พร้อม blur effect
- รองรับ delay และ direction

**text-animate.tsx**
- Text animation effects
- Word-by-word หรือ character-by-character animation
- Multiple animation types

**particles.tsx**
- Particle system background
- Customizable quantity, size, color
- Interactive mouse movement

**meteors.tsx**
- Meteor shower animation effect
- Random trajectories

#### 3D Components

**globe.tsx**
- Interactive 3D globe using Cobe
- Animated rotation
- Customizable markers

**space-model.tsx**
- 3D space scene using Three.js
- GLB model loading
- Ambient lighting

#### UI Components

**neon-gradient-card.tsx**
- Card with neon gradient border
- Animated gradient
- Customizable colors

**shiny-button.tsx**
- Button with shiny animation effect
- Hover interactions

**icon-cloud.tsx**
- 3D rotating cloud of icons
- Used for skill visualization

**highlighter.tsx**
- Text highlighting effects
- Multiple styles (underline, box, circle)
- Using rough-notation library

**terminal.tsx**
- Terminal UI component
- Typing animation
- Customizable prompts

### 4. Utility Components (`src/components/ui/`)

#### `custom.tsx`
- CustomBorderBackground component
- Decorative cosmic border/divider
- Gradient effects with particles

### 5. Utilities (`src/lib/`)

#### `utils.ts`
```typescript
// cn function - Merge and deduplicate Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

---

## 🚀 Development Guide

### Installation

```bash
# Install dependencies
npm install

# or
yarn install
```

### Development Server

```bash
# Run development server with Turbopack
npm run dev

# Server will start at http://localhost:3000
```

### Build & Production

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Linting

```bash
# Run ESLint
npm run lint
```

### Scripts Overview

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build production bundle |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 📝 Configuration Files

### `next.config.ts`
```typescript
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
};
```

**Purpose:** 
- Configure Next.js image optimization
- Allow external image sources (picsum.photos)

### `tsconfig.json`
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

**Purpose:**
- TypeScript compiler settings
- Path aliases for imports
- Strict type checking

### `components.json`
- Configuration for UI components
- Used by component CLI tools

### `eslint.config.mjs`
- ESLint rules and configuration
- Next.js specific rules

### `postcss.config.mjs`
- PostCSS plugins configuration
- Tailwind CSS processing

---

## 🎨 Styling System

### Tailwind CSS
- Utility-first CSS framework
- Custom color schemes
- Responsive design utilities
- Animation utilities

### Color Schemes
Project ใช้ color schemes หลายแบบ:
- `orange` / `orangeLight`
- `blue`
- `yellow`
- `red`
- `green`
- `purple`
- `indigo`

แต่ละ scheme มี:
- gradient
- border color
- background color
- text color
- accent color

### Common Classes
```css
/* Glassmorphism */
.backdrop-blur-lg
.bg-slate-900/90

/* Gradients */
.bg-gradient-to-r
.from-purple-400
.to-blue-400

/* Animations */
.animate-pulse
.transition-all
.duration-300

/* Hover Effects */
.hover:scale-105
.hover:shadow-2xl
```

---

## 🔧 How to Modify

### Adding a New Section

1. สร้าง component ใหม่ใน `src/components/page/`
```typescript
// newSection.tsx
export default function NewSection() {
  return (
    <div className="min-h-screen">
      {/* Your content */}
    </div>
  )
}
```

2. Import และเพิ่มใน `src/app/page.tsx`
```typescript
import NewSection from '@/components/page/newSection'

export default function Home() {
  return (
    <div>
      {/* Other sections */}
      <section id="new-section">
        <NewSection />
      </section>
    </div>
  )
}
```

3. เพิ่ม navigation item ใน `navbar.tsx`
```typescript
const navItems = [
  // ... existing items
  { id: 'new-section', label: 'New Section', icon: YourIcon },
]
```

### Changing Text Content

ข้อความส่วนใหญ่อยู่ใน component ตัวเอง สามารถแก้ไขได้โดยตรง:

```typescript
// heroSection.tsx
<TextAnimate>
  Your New Text Here
</TextAnimate>
```

### Adding Images

1. วางไฟล์ภาพใน `public/` directory
2. ใช้ Next.js Image component:

```typescript
import Image from 'next/image'

<Image 
  src="/your-image.png" 
  alt="description"
  width={500}
  height={300}
/>
```

3. สำหรับ external images, เพิ่ม domain ใน `next.config.ts`:
```typescript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'your-domain.com',
    },
  ],
}
```

### Customizing Colors

แก้ไข color schemes ใน component:

```typescript
const colorScheme = {
  gradient: "from-blue-600 to-cyan-600",
  border: "border-blue-500/30",
  bg: "bg-blue-900/20",
  text: "text-blue-200",
  accent: "text-blue-400"
}
```

### Adding Animations

ใช้ Magic UI components:

```typescript
import { BlurFade } from '@/components/magicui/blur-fade'

<BlurFade delay={0.2}>
  <YourComponent />
</BlurFade>
```

---

## 📊 Performance Considerations

### Image Optimization
- ใช้ Next.js Image component
- Lazy loading โดยอัตโนมัติ
- Responsive images

### Code Splitting
- Next.js App Router จัดการ automatically
- Dynamic imports สำหรับ heavy components

### Animation Performance
- ใช้ CSS transforms
- GPU-accelerated animations
- Debounce scroll events

---

## 🐛 Common Issues & Solutions

### Issue: Images not loading from external sources
**Solution:** เพิ่ม domain ใน `next.config.ts` remotePatterns

### Issue: TypeScript errors
**Solution:** ตรวจสอบ `tsconfig.json` และ path aliases

### Issue: Animations not smooth
**Solution:** ตรวจสอบ GPU acceleration และลด animation complexity

### Issue: Build errors
**Solution:** ลบ `.next` folder และ `node_modules`, แล้ว reinstall

---

## 📚 Additional Resources

### Documentation Links
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Three.js](https://threejs.org/docs/)

### Component Libraries
- [Magic UI](https://magicui.design/)
- [Lucide Icons](https://lucide.dev/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)

---

## 🎯 Best Practices

### Code Organization
- แยก components ตาม responsibility
- ใช้ TypeScript interfaces
- Keep components small and focused

### Performance
- Lazy load heavy components
- Optimize images
- Minimize re-renders

### Accessibility
- Semantic HTML
- Keyboard navigation
- ARIA labels where needed

### Responsive Design
- Mobile-first approach
- Test on multiple screen sizes
- Use Tailwind responsive utilities

---

## 📝 Version History

- **v0.1.0** - Initial project setup
  - Next.js 15.3.5
  - React 19
  - Magic UI components
  - Portfolio sections

---

## 👨‍💻 Development Team

Developed by: FaradayBanana  
Last Updated: 2025

---

## 📄 License

Private project

---

## 🤝 Contributing

เมื่อต้องการแก้ไขหรือเพิ่มฟีเจอร์:

1. สร้าง branch ใหม่
2. ทำการแก้ไข
3. Test thoroughly
4. Create pull request with description

---

**Happy Coding! 🚀**

