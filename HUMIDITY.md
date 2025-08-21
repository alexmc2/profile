# Humidity Advice - Comprehensive Indoor Humidity Management Platform

A modern, full-stack affiliate website built with Next.js 14, focused on providing comprehensive advice about indoor humidity control, dehumidifiers, and air quality improvement. The platform combines educational content with product reviews, interactive tools, and a community engagement system.

## 🚀 Tech Stack

### Core Framework

- **Next.js 14** - React framework with App Router for server-side rendering and static site generation
- **React 18.3** - UI library with concurrent features
- **TypeScript** - Type-safe development

### Database & ORM

- **PostgreSQL** - Primary database for comments and user interactions
- **Prisma 5.22** - Type-safe ORM with migrations and schema management

### Styling & UI

- **Tailwind CSS 3.3** - Utility-first CSS framework
- **Radix UI Colors** - Accessible color system
- **Framer Motion 11** - Advanced animations and transitions
- **AOS (Animate On Scroll)** - Scroll-triggered animations
- **React Awesome Reveal** - Component reveal animations
- **Headless UI** - Unstyled, accessible UI components
- **Radix UI Components** - Accessible form and select components
- **Tailwind Plugins**:
  - Forms - Better form element styling
  - Typography - Rich text formatting
  - Aspect Ratio - Responsive media containers
  - Animate - Animation utilities

### Content Management

- **MDX** - Markdown with JSX components for rich content authoring
- **Gray Matter** - Front matter parsing for metadata
- **Next MDX Remote** - Server-side MDX rendering
- **Remark/Rehype** - Markdown processing pipeline:
  - GFM support (tables, strikethrough, etc.)
  - Syntax highlighting with rehype-pretty-code
  - Image optimization with remark-unwrap-images

### Media & Assets

- **Cloudinary Integration** (next-cloudinary) - Cloud-based image optimization and delivery
- **Sharp** - High-performance image processing
- **YouTube Integration** - Embedded video content with custom player

### SEO & Performance

#### SEO Features

- **Dynamic Meta Tags** - Page-specific title, description, and Open Graph tags
- **Structured Data** - Rich snippets for:
  - Organization schema
  - Article schema with images and videos
  - Product reviews with aggregate ratings
  - Breadcrumb navigation
  - WebPage schema
  - FAQ schema
- **XML Sitemap** - Auto-generated with priority and change frequency
- **Robots.txt** - Search engine crawling directives
- **IndexNow Integration** - Instant search engine indexing

#### Performance Optimizations

- **Image Optimization**:
  - Multiple formats (AVIF, WebP fallbacks)
  - Lazy loading
  - Blur placeholders
  - Responsive images via Cloudinary
- **Code Splitting** - Automatic route-based splitting
- **Bundle Analysis** - Build-time bundle size monitoring
- **SWC Minification** - Fast JavaScript/TypeScript compilation
- **Compression** - Gzip/Brotli compression
- **Caching Headers** - Optimized cache control strategies

### Analytics & Tracking

- **Google Analytics 4** - User behavior tracking
- **Vercel Analytics** - Web vitals and performance metrics
- **Custom Event Tracking** - User interaction monitoring

## 🌟 Key Features

### Content & Education

- **Multi-language Support** - Content available in:
  - English UK (en-UK)
  - English US (en-US)
- **Comprehensive Blog System**:
  - 6 main categories with 25+ in-depth articles
  - Product reviews with detailed analysis
  - Buying guides and comparisons
  - Maintenance tutorials
  - FAQ sections
- **Dynamic Category Pages** - Auto-generated from content structure
- **Full-Text Search** - Powered by Fuse.js for fuzzy matching

### Interactive Tools & Calculators

- **Dehumidifier Size Calculator** - Room-specific recommendations based on:
  - Room dimensions
  - Humidity levels
  - Usage patterns
- **Energy Cost Calculator** - Estimate running costs with:
  - Power consumption
  - Local electricity rates
  - Usage hours
- **Interactive Comparison Tables** - Side-by-side product comparisons

### Community & Engagement

#### Comments System

- **User Comments & Reviews** - Full CRUD operations with:
  - Nested replies
  - Star ratings (1-5 scale)
  - Edit/delete functionality (24-hour window)
  - Soft delete for moderation
  - User identification via UUID
- **Moderation System**:
  - Admin approval workflow
  - Email notifications for new comments
  - Spam prevention
  - Rate limiting (IP-based)
- **Sorting & Filtering**:
  - By date (newest/oldest)
  - By rating (highest/lowest)
  - Approved/pending status

#### Rating System

- **Aggregate Ratings** - Combined scores from all reviews
- **Visual Rating Display** - Star components with half-star precision
- **Rating Distribution** - Breakdown by star count

### Affiliate & Monetization

- **Amazon Affiliate Integration** - Product links with tracking
- **Dynamic Price Buttons** - "Check Price on Amazon" CTAs
- **Product Cards** - Rich product displays with:
  - Images
  - Specifications
  - Pros/cons tables
  - Rating scores
  - Direct purchase links
- **Disclosure Banners** - FTC-compliant affiliate disclosures

### User Experience

- **Responsive Design** - Mobile-first approach
- **Dark Mode Support** - System preference detection
- **Reading Progress Bar** - Visual article progress indicator
- **Table of Contents** - Auto-generated from headings
- **Breadcrumb Navigation** - Hierarchical page structure
- **Cookie Consent** - GDPR-compliant consent management
- **Loading States** - Skeleton screens and spinners
- **Error Boundaries** - Graceful error handling
- **404 Page** - Custom not found page

### Security & Privacy

- **Security Headers**:
  - Strict-Transport-Security (HSTS)
  - X-Content-Type-Options
  - X-Frame-Options
  - X-XSS-Protection
  - Referrer-Policy
- **Rate Limiting** - API endpoint protection
- **Input Sanitization** - XSS prevention
- **CAPTCHA Integration** - Bot protection (react-google-recaptcha)
- **Environment Variables** - Secure configuration management

### Email & Communication

- **Nodemailer Integration** - Transactional emails
- **Resend API** - Email delivery service
- **Formspree Integration** - Contact form handling
- **Moderation Notifications** - Admin alerts for new content

## 📁 Project Structure

```
humidity-advice/
├── app/                          # Next.js App Router
│   ├── (home)/                   # Home layout group
│   │   ├── [category]/           # Dynamic category routes
│   │   │   ├── [slug]/          # Dynamic article pages
│   │   │   └── page.tsx         # Category listing page
│   │   ├── about/               # About page
│   │   ├── brands/              # Brands overview
│   │   ├── contact/             # Contact form
│   │   ├── dehumidifier-size-calculator/  # Tool page
│   │   ├── energy-cost-calculator/        # Tool page
│   │   ├── search/              # Search functionality
│   │   ├── privacy-policy/      # Legal pages
│   │   └── terms-and-conditions/
│   ├── api/                     # API routes
│   │   ├── comments/            # Comments CRUD
│   │   ├── moderate/            # Admin moderation
│   │   └── ratings/             # Rating aggregation
│   ├── content/                 # MDX content files
│   │   ├── en-UK/              # UK English content
│   │   └── en-US/              # US English content
│   ├── layout.tsx              # Root layout
│   ├── not-found.tsx           # 404 page
│   ├── robots.ts               # SEO robots file
│   └── sitemap.ts              # Dynamic sitemap
├── components/                  # React components
│   ├── categories/             # Category-specific components
│   ├── comments/               # Comment system components
│   ├── home/                   # Homepage components
│   ├── mdx/                    # MDX custom components
│   ├── posts/                  # Blog post components
│   ├── ui/                     # UI components (header, footer, etc.)
│   ├── utils/                  # Utility components
│   └── video/                  # Video player components
├── hooks/                      # Custom React hooks
├── lib/                        # Utility functions
│   ├── cloudinary.tsx          # Image optimization
│   ├── comments.ts             # Comment logic
│   ├── email.ts                # Email services
│   ├── metadata.ts             # SEO metadata
│   ├── prisma.ts               # Database client
│   ├── rate-limit.ts           # API rate limiting
│   ├── ratings.ts              # Rating calculations
│   ├── structuredData.ts       # Schema.org data
│   └── utils.ts                # General utilities
├── prisma/                     # Database schema
│   ├── migrations/             # Database migrations
│   └── schema.prisma           # Prisma schema
├── public/                     # Static assets
│   ├── images/                 # Images and icons
│   └── manifest.webmanifest    # PWA manifest
├── utils/                      # Additional utilities
└── configuration files         # Config files
```

## 🔧 Configuration Files

- **next.config.mjs** - Next.js configuration with MDX, image optimization, security headers
- **tailwind.config.js** - Tailwind CSS with custom theme, fonts, plugins
- **tsconfig.json** - TypeScript configuration
- **postcss.config.js** - PostCSS with Tailwind
- **prisma/schema.prisma** - Database schema
- **.env files** - Environment variables (DATABASE_URL, API keys, etc.)

## 🚦 Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- Cloudinary account (for images)
- Google Analytics account (optional)
- Amazon Affiliate account (for monetization)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/humidity-advice.git
cd humidity-advice
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
# Create .env.local file with:
DATABASE_URL="postgresql://..."
NEXT_PUBLIC_BASE_URL="https://www.humidityadvice.com"
# Add other required variables
```

4. Set up the database:

```bash
npx prisma generate
npx prisma migrate dev
```

5. Run the development server:

```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

### Analyze Bundle Size

```bash
ANALYZE=true npm run build
```

## 📝 Content Management

### Adding New Articles

1. Create MDX file in `app/content/[locale]/blog/[category]/`
2. Add frontmatter metadata:

```mdx
---
title: 'Article Title'
description: 'Article description'
image: 'https://cloudinary-url'
publishedAt: '2024-01-01'
category: 'category-name'
isReview: true # For product reviews
rating: 4.5 # Product rating
---
```

### Custom MDX Components

- `<DehumidifierCalculator />` - Interactive calculator
- `<CheckPriceButton />` - Affiliate product button
- `<ProsConsTable />` - Product pros/cons display
- `<ScoreBox />` - Rating display component
- `<YouTubePlayer />` - Embedded videos

## 🔐 Security Considerations

- All user inputs are sanitized
- API endpoints are rate-limited
- Comments require moderation approval
- Secure headers implemented
- Environment variables for sensitive data
- HTTPS enforced via HSTS

## 📈 Performance Metrics

- Lighthouse Score: 95+ (Performance)
- Core Web Vitals: All green
- Time to Interactive: <3s
- First Contentful Paint: <1s

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is proprietary software. All rights reserved.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting and analytics
- Cloudinary for image optimization
- All open-source contributors

## 📞 Support

For questions or support, please contact through the website's contact form or open an issue on GitHub.

---

Built with ❤️ for helping people manage indoor humidity effectively.
