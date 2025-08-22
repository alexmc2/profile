// src/lib/content/portfolio.ts
/*
 * =========================
 * AUTHOR INFO
 * =========================
 */

import { StringKeyValueType } from '../types';

export const socialLinks: StringKeyValueType = {
  facebook: 'https://www.facebook.com/alex.mcgarry',
  instagram: 'https://www.instagram.com/alex_mcgy',
  github: 'https://github.com/alexmc2',
  linkedin: 'https://www.linkedin.com/in/alex-mcgarry/',
};

export const author = {
  name: 'Alex McGarry',
  email: 'alexandramcgarryx@gmail.com',
};

export const seoData = {
  title: 'Alex McGarry | Front-End Developer',
  description:
    'Alex McGarry is a front-end developer who specializes in building (and occasionally designing) exceptional visual interfaces.',
  author: author.name,
  image:
    'https://res.cloudinary.com/drbz4rq7y/image/upload/v1754664865/me-background2_vyn87g.jpg',
  url: 'https://www.amcgarry.co.uk',
  keywords: ['Alex McGarry', 'Alex McGarry Portfolio'],
};
