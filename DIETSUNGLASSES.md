# Diet Sunglasses Photography

A modern photo slideshow web application built with Next.js that showcases photography work with smooth transitions and automated playback. Images are hosted on Cloudinary with optimized delivery and customizable metadata.

## Features

- **Automated Slideshow**: Self-advancing photo slideshow with customizable intervals (3s, 5s, 8s, 10s)
- **Smooth Transitions**: Custom wipe transition animations with scanner line effect
- **Smart Random Selection**: Intelligent randomization that avoids recent images to prevent repetition
- **Responsive Design**: Optimized for both desktop and mobile viewing
- **Cloudinary Integration**: Automatic image optimization and delivery through Cloudinary CDN
- **Play/Pause Controls**: Manual control over slideshow playback
- **Contact Integration**: Direct email and Instagram links in the header

## Tech Stack

- **Frontend**: Next.js 15 with React 19
- **Styling**: Tailwind CSS v4 with custom animations
- **UI Components**: Radix UI Select component with Tailwind styling
- **Image Management**: Cloudinary for hosting and optimization
- **Icons**: Lucide React for UI icons
- **TypeScript**: Full TypeScript support throughout

## Project Structure

```
diet-sunglasses/
├── app/
│   ├── actions.ts          # Server actions for data fetching
│   ├── globals.css         # Global styles and animations
│   ├── layout.tsx          # Root layout component
│   └── page.tsx            # Home page component
├── components/
│   ├── header.tsx          # Site header with branding and contact links
│   ├── photo-slideshow.tsx # Main slideshow component
│   └── ui/
│       └── select.tsx      # Custom select component
├── lib/
│   ├── cloudinary.ts       # Cloudinary configuration and utilities
│   └── utils.ts            # General utility functions
├── public/                 # Static assets
├── next.config.ts          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## Environment Variables

Create a `.env.local` file with the following variables:

```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd diet-sunglasses
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables (see above)

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## Cloudinary Setup

1. Create a Cloudinary account at [cloudinary.com](https://cloudinary.com)
2. Upload your images to your Cloudinary media library
3. Optional: Add custom metadata to images:
   - `caption`: Display text shown below images
   - `alt`: Alternative text for accessibility

## Features in Detail

### Photo Slideshow

- Displays images from Cloudinary in a full-screen slideshow
- Smooth wipe transitions between images with animated scanner line
- Automatic random image selection avoiding recently shown photos
- Configurable playback speed with visual controls

### Image Optimization

- Automatic WebP format conversion for modern browsers
- Responsive image sizing based on viewport
- Quality optimization through Cloudinary's auto settings
- Lazy loading for improved performance

### Responsive Design

- Mobile-first responsive layout
- Optimized header sizing for different screen sizes
- Touch-friendly controls on mobile devices
- Proper spacing and typography scaling

## Customization

### Styling

Modify `app/globals.css` for custom animations and global styles. The project uses Tailwind CSS v4 with custom CSS variables defined in the `:root` selector.

### Transition Effects

Custom animations are defined in `globals.css`:

- `wipeRight`: Creates the reveal effect for new images
- `hideRight`: Hides the current image during transition
- `scanLineMove`: Animates the scanner line effect

### Contact Information

Update contact details in `components/header.tsx`:

- Email address for the contact icon
- Instagram URL for the social media link

## Performance

- Images are optimized through Cloudinary's transformation API
- Next.js automatic code splitting for optimal loading
- Server-side rendering for initial page load
- Responsive images with proper sizing hints

## Browser Support

- Modern browsers supporting CSS clip-path
- WebP image format support (with fallbacks)
- ES2017+ JavaScript features

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting with `npm run lint`
5. Submit a pull request

## License

This project is private and proprietary to Diet Sunglasses Photography.
