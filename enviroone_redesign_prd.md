# EnviroOne Website Redesign - Product Requirements Document

## Executive Summary

This PRD outlines a comprehensive redesign of the EnviroOne website, drawing inspiration from Charity: Water, Sonos, and Clova's design excellence. The redesign focuses on creating an immersive, texture-rich digital experience that communicates environmental impact through sophisticated spatial layouts, purposeful animations, and contemporary visual language. The goal is to elevate EnviroOne's digital presence to match the profound impact of their work in Sierra Leone, creating an emotional connection that drives engagement and support.

---

## Design Philosophy & Principles

### Core Visual Language

The redesign embraces a premium yet approachable aesthetic that reflects EnviroOne's commitment to sustainable development. We draw from nature's textures—earthy substrates, water ripples, organic grain—while maintaining modern sophistication. The design should feel both grounded in African landscapes and globally contemporary.

**Texture Strategy:**
- Subtle grain overlays throughout the site (8-12% opacity) create tactile depth without overwhelming content
- Organic noise textures on section backgrounds evoke soil, water, and natural materials
- Soft gradient meshes in earth tones (terracotta, sage green, sandy beige, water blue) provide dimensional backgrounds
- Paper-like textures for content cards suggesting handcrafted authenticity
- Frosted glass effects (glassmorphism) for overlay elements and navigation

**Color Palette:**
- Primary: Deep forest green (#2C5F2D), representing growth and sustainability
- Secondary: Warm terracotta (#C76F43), echoing Sierra Leone's soil
- Accent: Clear water blue (#4A9FCC), symbolizing clean water access
- Neutrals: Cream (#F5F1E8), warm gray (#8B8578), charcoal (#2E2E2E)
- Highlight: Golden sunrise (#E8A547) for calls-to-action

### Spatial Philosophy

Generous whitespace is fundamental to the redesign. Each section breathes, allowing users to focus on one message at a time. Following Sonos's spacious approach:

- Minimum 120px vertical padding between major sections on desktop
- 80px on tablet, 60px on mobile
- Content constrained to 1200px maximum width for reading comfort
- Full-bleed sections alternate with constrained content for rhythm
- Asymmetric layouts create visual interest while maintaining balance

---

## Page Structure & Layout System

### Homepage Hero Section

**Layout:** Full viewport height (100vh) with centered content overlay

**Visual Elements:**
- Background: Looping Lottie animation of abstract water droplets forming and dissipating, layered over a high-quality photo of a Sierra Leone landscape at golden hour
- Texture: Subtle grain overlay (10% opacity) across entire section
- Typography: Large, airy headline split across two lines with generous letter-spacing

**Animation Sequence:**
1. Page load: Grain texture fades in (800ms)
2. Background photo cross-fades from slightly blurred to sharp (1200ms)
3. Lottie water droplets begin their loop
4. Headline animates in using split-text reveal, each word appearing with slight stagger (150ms between words)
5. Subheadline fades up from below with 300ms delay after headline completes
6. CTA button scales in from 0.9 to 1 with elastic easing (600ms)

**Scroll Behavior:**
- Parallax effect on background image (0.5x scroll speed)
- Content fades out gradually as user scrolls (opacity decreasing from 1 to 0 over 200px of scroll)
- Grain texture intensifies slightly on scroll, suggesting depth

### Statistics Section (Bento Grid)

**Layout:** Bento grid system inspired by Clova's clean module approach

The statistics section uses a responsive bento grid showcasing impact metrics. On desktop, this displays as an asymmetric 12-column grid with varied cell sizes creating visual rhythm.

**Grid Structure (Desktop):**
```
Row 1: [4 cols] [5 cols] [3 cols]
Row 2: [3 cols] [6 cols] [3 cols]
Row 3: [5 cols] [4 cols] [3 cols]
```

Each cell contains:
- Metric number (large, bold typography)
- Supporting label
- Relevant icon or micro-illustration
- Subtle gradient background unique to that cell
- Soft shadow for depth (0 4px 20px rgba(0,0,0,0.08))

**Cell Animations:**
- On scroll into view: Each cell fades in and scales from 0.95 to 1
- Stagger: 80ms delay between cells, flowing from top-left to bottom-right
- Number animation: Count-up effect on first view (2 second duration, ease-out)
- Hover: Cell lifts with increased shadow, subtle scale to 1.02
- Background gradient shifts slightly on hover (200ms transition)

**Lottie Integration:**
Each statistic cell features a subtle Lottie icon animation:
- Water well icon: Water droplet falls and creates ripple effect (loop)
- Farmers icon: Seedling sprouts and grows (plays once on view, loops subtly)
- Hectares icon: Leaves rustle in breeze (continuous gentle loop)

**Texture Details:**
- Each bento cell has a unique, barely-visible texture overlay suggesting its content (water ripples for wells, soil for agriculture)
- 60px border-radius on all cells for contemporary feel
- 24px gap between cells

### "Our Focus Areas" Section

**Layout:** Three-column grid on desktop, expanding to full-width cards on mobile

This section showcases Agriculture, Water Well Program, and Education using large, immersive cards that feel like portals into each program area.

**Card Structure:**
- Minimum 500px height on desktop
- Background: Full-bleed photograph with dark gradient overlay (from transparent at top to rgba(0,0,0,0.7) at bottom)
- Content anchored to bottom 1/3 of card
- Icon or illustrated element floating in upper portion
- Generous internal padding (48px)

**Visual Treatment:**
- Cards have 16px border-radius
- Hover state reveals additional detail panel that slides up from bottom
- Grain texture overlay (8% opacity) across photos
- Thin (1px) cream-colored border for subtle framing

**Animation Sequence:**
1. Cards load with staggered appearance (200ms between each)
2. Photos fade in from 0 to full opacity over 800ms
3. Text content slides up from below with 200ms delay after photo
4. On hover: 
   - Card scales to 1.03
   - Shadow intensifies (0 8px 40px rgba(0,0,0,0.15))
   - Detail panel slides up revealing bullet points
   - Lottie icon animation plays
   - Background photo zooms very slightly (1.05x) over 400ms

**Lottie Icons Per Card:**
- Agriculture: Animated seedling growing, leaves unfurling
- Water: Water pump handle moving, water flowing
- Education: Book pages turning, light bulb illuminating

### Impact Stories Carousel

**Layout:** Full-width section with horizontal scrolling cards

Inspired by Sonos's product showcase, this section presents testimonials and impact stories in an elegant horizontal scroll.

**Visual Design:**
- Cards are 420px wide with 32px gap between
- Cream background with subtle paper texture
- Each card features a circular portrait photo (180px diameter) at top
- Quote text in italic serif font
- Attribution in sans-serif below
- Soft inner shadow for depth

**Scroll Behavior:**
- Custom horizontal scroll with momentum
- Progress indicator bar below carousel
- Snap-to-grid scrolling (cards align to left edge when scroll stops)
- Arrow navigation overlays on hover (left/right edges)
- Mouse drag to scroll on desktop

**Animation Details:**
- Cards scale up slightly when centered in viewport (1.05x)
- Non-centered cards have reduced opacity (0.7)
- Smooth transitions between states (400ms ease-out)
- Portrait photos have subtle zoom animation on card hover
- Grain texture animates (shifts position) during scroll for parallax effect

### Project Details Sections

**Layout:** Alternating left-right layout pattern (similar to Charity: Water's approach)

Each major project (Agriculture, Water Wells, Education) gets a dedicated full-screen section with immersive visuals.

**Pattern A (Image Left, Content Right):**
- 60/40 split on desktop
- Image side: Full-height photo with parallax scroll (0.7x speed)
- Content side: Centered vertically with maximum 600px width
- 80px padding from edge

**Pattern B (Content Left, Image Right):**
- Reverse of Pattern A
- Creates rhythm through alternation

**Visual Elements:**
- Large section numbers (01, 02, 03) in outline style, positioned fixed during section scroll
- Headline with generous line-height (1.5)
- Body copy in comfortable reading size (18px)
- Bullet points with custom checkmark icons (animated on scroll into view)
- CTA button with hover animation (background slides from left to right)

**Lottie Integration:**
- Decorative animated elements in corners: 
  - Floating leaves for agriculture section
  - Water droplets for water wells
  - Paper planes for education
- Elements drift gently, creating ambient movement

**Texture & Color:**
- Content backgrounds use section-specific gradient meshes
- Agriculture: Green to sage gradient with leaf texture overlay
- Water: Blue to aqua gradient with water ripple texture
- Education: Warm gold to cream with subtle paper texture

### "All It Takes Is Three" Section

**Layout:** Full-width statement section with dramatic spacing

This powerful message deserves maximum impact through minimalism and scale.

**Visual Design:**
- 100vh height minimum
- Centered content with maximum 900px width
- Large headline (72px on desktop, responsive down)
- Background: Textured gradient (terracotta to forest green)
- Animated grain texture shifting subtly

**Animation Sequence:**
1. Section comes into view with parallax background shift
2. Large "3" numeral animates in first:
   - Starts at 10x scale, faded
   - Scales down to normal size while opacity goes to 1
   - Duration: 1200ms with elastic ease-out
3. Headline text splits into words
4. Each word fades and slides up with stagger (100ms between words)
5. Supporting text fades in after headline completes
6. Lottie animation of three interconnected circles begins loop

**Lottie Animation:**
Custom animation showing three elements connecting:
- First circle represents agriculture (seed icon)
- Second represents water (droplet icon)
- Third represents education (book icon)
- Lines draw between circles suggesting interconnection
- Subtle pulse effect on each circle
- Loops seamlessly every 4 seconds

### Team Section

**Layout:** Bento grid layout with mixed card sizes

**Grid Structure:**
- Team lead cards: Larger (spanning 2 columns)
- Team member cards: Standard size (1 column)
- Empty cells filled with decorative Lottie elements or quotes

**Card Design:**
- Portrait photo in rounded square (not circle) for modern feel
- Name and title overlay at bottom of photo with gradient background
- Hover reveals bio text sliding up from bottom
- Grain texture on photos for consistency
- Warm shadow on hover

**Animation:**
- Staggered fade-in on scroll (similar to statistics grid)
- Photos start grayscale, transition to color on hover (600ms)
- Subtle zoom on hover (1.08x scale)

### Footer Section

**Layout:** Multi-column responsive footer with generous spacing

**Visual Design:**
- Charcoal background with subtle texture
- Cream text for contrast
- Four columns on desktop (About, Projects, Get Involved, Contact)
- Newsletter signup with inline form
- Social icons with hover animations

**Animation Details:**
- Links underline from center outward on hover
- Social icons have Lottie animations:
  - Instagram: Camera shutter effect
  - Twitter: Bird flying
  - Facebook: Like thumb appearing
- Form input has focus animation (border color shift, subtle glow)

---

## Interactive Elements & Micro-Animations

### Button Styles

**Primary CTA (Donate/Get Involved):**
- Background: Gradient from golden sunrise to terracotta
- Padding: 18px 48px
- Border-radius: 32px (pill shape)
- Typography: 16px, medium weight, 1px letter-spacing

**Hover State:**
- Background gradient shifts position (animated over 300ms)
- Scale: 1.05
- Shadow increases (0 8px 24px rgba(0,0,0,0.2))
- Lottie icon appears next to text (arrow or heart)

**Click State:**
- Scale: 0.98 briefly
- Haptic-style animation: quick scale down and back

**Secondary Button:**
- Transparent background with 2px border (forest green)
- Same padding and border-radius
- Text in forest green
- Hover: Background fills with green, text becomes cream
- Transition: 300ms ease-out

### Navigation System

**Desktop Navigation:**
- Fixed top navigation bar (80px height)
- Background: Frosted glass effect (backdrop-blur: 12px)
- Becomes visible after scrolling 100px down page
- Slides down from top (300ms ease-out)
- Logo on left, navigation items centered, CTA button on right

**Mobile Navigation:**
- Hamburger icon (animated to X on open)
- Full-screen overlay menu
- Menu slides in from right with backdrop blur
- Navigation items fade in with stagger (80ms between items)
- Each item has hover effect even on touch: slight scale increase

**Navigation Animation:**
- Links have underline that draws from left to right on hover (200ms)
- Active page indicator: Dot below text in accent color
- Scroll progress indicator bar at very top (2px height, grows from left as user scrolls)

### Scroll Animations

**Global Scroll Behaviors:**
- Elements fade and slide up when entering viewport (using Intersection Observer)
- Threshold: 20% of element visible
- Animation: 600ms ease-out
- Different elements have different animation delays for orchestrated reveals

**Parallax Layers:**
- Background images: 0.5x scroll speed
- Mid-ground content: 0.8x scroll speed  
- Foreground elements: Normal scroll speed
- Creates depth perception

**Scroll-Triggered Lottie:**
- Certain Lottie animations play only when their section enters viewport
- Others play based on scroll position (scrub through animation frames as user scrolls)
- Creates interactive storytelling experience

### Form Interactions

**Input Fields:**
- Height: 56px
- Border: 2px solid transparent
- Background: White with subtle texture
- Border-radius: 8px
- Focus state: Border becomes accent color, slight glow effect
- Label floats up and scales down on focus (Material Design style)
- Error state: Shake animation, border turns red

**Submission:**
- Button shows loading spinner (Lottie animation)
- Success: Checkmark Lottie animation appears, form fades out, success message fades in
- Confetti Lottie animation plays on successful donation form submission

---

## Typography System

### Font Families

**Headings:** 
- Primary: "Sohne" or similar geometric sans-serif (clean, modern)
- Fallback: system-ui, -apple-system, sans-serif

**Body:**
- Primary: "Inter" for excellent readability
- Fallback: system-ui, sans-serif

**Accent/Quotes:**
- "Tiempos Text" or similar serif for testimonials
- Creates emotional warmth and traditional feel

### Type Scale

**Display (Hero headlines):**
- Desktop: 72px / Line-height 1.1 / Letter-spacing -1px
- Tablet: 56px / Line-height 1.15
- Mobile: 40px / Line-height 1.2

**H1 (Section headlines):**
- Desktop: 48px / Line-height 1.2 / Letter-spacing -0.5px
- Tablet: 38px / Line-height 1.25
- Mobile: 32px / Line-height 1.3

**H2 (Subsections):**
- Desktop: 36px / Line-height 1.3
- Tablet: 30px / Line-height 1.3
- Mobile: 26px / Line-height 1.35

**H3 (Card titles):**
- All screens: 24px / Line-height 1.4

**Body Large:**
- 20px / Line-height 1.6

**Body:**
- 18px / Line-height 1.7

**Body Small:**
- 16px / Line-height 1.6

**Caption:**
- 14px / Line-height 1.5

### Typographic Treatments

**Animation Effects:**
- Headlines use split-text reveal on scroll
- Each word or line animates independently
- Slight stagger (100-150ms) between elements
- Fade + slide motion (slide up 30px while fading in)
- Optional: Some headlines have gradient text that shifts on scroll

**Special Effects:**
- Pull quotes in sections: Enlarged first letter (2x size), different color
- Important statistics: Gradient text effect
- CTA text: Subtle glow on hover

---

## Lottie Animation Specifications

### Primary Hero Animation

**Concept:** Abstract representation of water cycle meeting earth

**Elements:**
- Water droplets forming from vapor
- Droplets falling onto soil surface
- Soil absorbing water with subtle ripple
- Plant seedling emerging
- Cycle repeats

**Technical:**
- File size: <100KB
- Duration: 8 seconds
- Loops seamlessly
- Rendered at 60fps
- Color palette matches site colors
- Plays automatically on page load
- Opacity: 40% to allow background photo visibility

### Statistics Section Icons

**Agriculture Icon:**
- Seedling sprouting from soil
- Leaves unfurling in time-lapse style
- Roots growing beneath surface (translucent)
- Duration: 3 seconds
- Plays on scroll into view, then subtle loop

**Water Well Icon:**
- Hand pump handle moving down
- Water flowing from spout
- Water collecting in container below
- Ripple effect in container
- Duration: 4 seconds
- Continuous loop

**Education Icon:**
- Book opening
- Pages flipping
- Light bulb appearing above book (idea moment)
- Light rays emanating
- Duration: 3 seconds
- Plays once on view, subtle ending loop

### Section Transition Animations

**Between Sections:**
- Subtle ambient Lottie animations at section borders
- Flowing lines suggesting connection
- Organic shapes morphing
- Always loops
- Very subtle (20% opacity)
- Provides visual flow between content blocks

### Form Success Animation

**Donation Success:**
- Checkmark grows from center with elastic bounce
- Confetti particles fall from top
- Heart icon pulses
- "Thank you" text fades in
- Duration: 3 seconds
- Plays once on successful submission

### Loading States

**Content Loading:**
- Custom loader animation (not generic spinner)
- Three dots in site colors that bounce in sequence
- Or: Water droplets filling up container
- Duration: 1.5 seconds loop
- Appears whenever content is being fetched

---

## Responsive Behavior

### Breakpoints

- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop Small: 1024px - 1439px
- Desktop Large: 1440px+

### Mobile-Specific Optimizations

**Layout Adjustments:**
- Bento grids collapse to single column
- Horizontal scrolling sections maintain scroll behavior
- Statistics display in vertical stack with full card width
- Footer becomes accordion-style collapsible sections
- Navigation becomes full-screen overlay

**Animation Modifications:**
- Parallax effects reduced or disabled (performance)
- Lottie animations use mobile-optimized versions (smaller file size)
- Scroll animations trigger earlier (10% viewport instead of 20%)
- Hover effects convert to tap events with appropriate feedback

**Touch Interactions:**
- Cards have active state on tap (scale down slightly)
- Swipe gestures for carousels
- Pull-to-refresh consideration for dynamic content
- Haptic feedback where device supports

---

## Performance Considerations

### Loading Strategy

**Above-the-Fold:**
- Inline critical CSS for instant render
- Hero image uses AVIF/WebP with JPG fallback
- Lottie animations load after critical content
- Font files preloaded for FOUT prevention

**Below-the-Fold:**
- Lazy loading for images (loading="lazy")
- Lottie animations load on scroll near viewport
- Heavy textures compressed and optimized

**Asset Optimization:**
- Images: Modern formats (AVIF, WebP) with fallbacks
- Lottie: JSON files compressed, unnecessary layers removed
- Textures: SVG patterns where possible, PNG with heavy compression
- Fonts: WOFF2 format, only necessary weights loaded

### Animation Performance

- Use CSS transforms (translateZ for GPU acceleration)
- RequestAnimationFrame for JavaScript animations
- Lottie animations rendered on separate layer
- Avoid layout thrashing (batch DOM reads/writes)
- Intersection Observer for scroll triggers (not scroll event listeners)

---

## Accessibility Requirements

### WCAG 2.1 Level AA Compliance

**Color Contrast:**
- All text meets 4.5:1 minimum contrast ratio
- Large text meets 3:1 minimum
- Interactive elements have distinct focus states

**Keyboard Navigation:**
- All interactive elements keyboard accessible
- Logical tab order throughout site
- Skip navigation link for screen readers
- Focus indicators visible (3px outline in accent color)

**Screen Readers:**
- Semantic HTML throughout
- ARIA labels for icon buttons and Lottie animations
- Alt text for all images describes context, not just content
- Skip links for main content, navigation

**Animation Controls:**
- Respect prefers-reduced-motion media query
- Disable parallax and complex animations when set
- Provide pause controls for auto-playing Lottie animations
- Carousel has play/pause button

**Forms:**
- Labels associated with inputs
- Error messages announced to screen readers
- Required fields clearly marked
- Validation feedback both visual and announced

---

## Content Management

### CMS Structure

**Page Templates:**
- Homepage (custom layout as described)
- Project Pages (Agriculture, Water, Education)
- Team Page
- Blog Post Template
- Static Pages (About, Contact)

**Editable Regions:**
- Hero headline and subheadline
- Statistics (numbers and labels)
- Focus area cards (image, title, description, bullets)
- Team member cards (photo, name, title, bio)
- Testimonials
- Footer content and links

**Media Management:**
- Image upload with automatic optimization
- Lottie file upload system
- Video embedding support
- Alt text fields required for images

---

## Technical Stack Recommendations

### Frontend Framework
- Next.js for SSR/SSG capabilities, SEO benefits
- React for component architecture
- TailwindCSS for utility-first styling (with custom configuration)

### Animation Libraries
- Framer Motion for scroll animations and page transitions
- Lottie-React for Lottie integration
- GSAP for complex timeline animations (if needed)

### Additional Libraries
- React Intersection Observer for viewport detection
- Swiper.js for carousel (touch-enabled)
- React Hook Form for form management
- Zod for form validation

---

## Success Metrics

### User Engagement
- Time on page increase of 40%
- Scroll depth: 70% of visitors reaching footer
- Interaction rate with animations: 60% hovering over interactive elements
- Video play rate on embedded content: 50%

### Conversion Goals
- Donation conversion rate increase: 25%
- Newsletter signup increase: 35%
- Volunteer application increase: 30%
- Social shares increase: 40%

### Performance Targets
- Lighthouse Performance Score: 90+
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- Cumulative Layout Shift: <0.1
- Time to Interactive: <3.5s

### Accessibility
- WCAG 2.1 Level AA compliance: 100%
- Keyboard navigation: 100% of features accessible
- Screen reader compatibility: Full support

---

## Implementation Phases

### Phase 1: Foundation (Weeks 1-2)
- Design system creation (colors, typography, spacing)
- Component library development
- Grid system implementation
- Base Lottie animation creation

### Phase 2: Homepage (Weeks 3-4)
- Hero section with animations
- Statistics bento grid
- Focus areas cards
- Basic responsive behavior

### Phase 3: Content Sections (Weeks 5-6)
- Project detail sections
- Team section
- Impact stories carousel
- All It Takes Is Three section

### Phase 4: Interactive Elements (Week 7)
- Navigation system
- Form interactions
- Micro-animations
- Lottie integration refinement

### Phase 5: Polish & Optimization (Week 8)
- Animation timing refinement
- Performance optimization
- Accessibility audit and fixes
- Cross-browser testing
- Mobile optimization

---

## Conclusion

This redesign transforms EnviroOne's digital presence into an immersive, emotionally resonant experience that honors their impactful work in Sierra Leone. By combining sophisticated visual design, purposeful animations, and contemporary layout systems, we create a website that not only informs but inspires action. The generous use of whitespace, rich textures, and carefully orchestrated animations guides visitors through a storytelling journey that builds understanding and drives support for EnviroOne's mission.

The design balances premium aesthetics with authentic environmental messaging, creating a digital space that feels both globally contemporary and deeply connected to the communities EnviroOne serves. Through strategic use of Lottie animations, bento grids, and spacious layouts, every interaction reinforces the organization's commitment to sustainable development, clean water access, and educational empowerment.

---

**Document Version:** 1.0  
**Last Updated:** January 2026  
**Word Count:** 4,247 words