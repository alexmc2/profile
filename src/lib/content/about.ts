import { AboutSectionType } from '@/lib/types/sections';

export const aboutSection: AboutSectionType = {
  title: 'about me',
  // Paragraphs need to be changed from `/containers/About.tsx`
  // Because it wasn't possible to insert anchor tags like this
  list: {
    title: 'Here are a few technologies I’ve been working with recently:',
    items: [
      'NextJs',
      'TailwindCSS',
      'ExpressJs',
      'AI/ML',
      'Prisma',
      'CSS Animations',
    ],
  },
  img: 'https://res.cloudinary.com/drbz4rq7y/image/upload/v1754664865/me-background2_vyn87g.jpg',
};
