import { SkillsSectionType } from '@/lib/types/sections';

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: 'full-stack-development',
      title: 'full stack development',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Building full-stack applications with Next.js, React, and TypeScript',
        'Working with databases like PostgreSQL, MongoDB, and Supabase',
        'Creating RESTful APIs and implementing authentication',
        'Learning and applying new technologies like AI/ML integration',
      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        { name: 'html-5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        {
          name: 'typeScript',
          icon: 'vscode-icons:file-type-typescript-official',
        },
        { name: 'python', icon: 'logos:python' },
        { name: 'nodejs', icon: 'logos:nodejs-icon' },
        { name: 'reactjs', icon: 'logos:react' },
        { name: 'nextjs', icon: 'logos:nextjs-icon' },
        { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
        { name: 'prisma', icon: 'vscode-icons:file-type-prisma' },
        { name: 'postgresql', icon: 'logos:postgresql' },
        { name: 'mongodb', icon: 'logos:mongodb-icon' },
        { name: 'supabase', icon: 'logos:supabase-icon' },
        { name: 'redux', icon: 'logos:redux' },
        { name: 'jest', icon: 'vscode-icons:file-type-jest' },
      ],
    },
    {
      id: 'creative-development',
      title: 'visual design & creative coding',
      lottie: {
        light: '/lotties/designing.json',
        dark: '/lotties/designing-dark.json',
      },
      points: [
        'Experience with Adobe Photoshop and Illustrator',
        'Experience with After Effects and Lottie for animations',
        'Exploring creative coding with p5.js',
        'Building responsive, user-friendly interfaces',
      ],
      softwareSkills: [
        { name: 'adobe photoshop', icon: 'logos:adobe-photoshop' },
        { name: 'adobe illustrator', icon: 'logos:adobe-illustrator' },
        { name: 'after effects', icon: 'logos:adobe-after-effects' },
        { name: 'cloudinary', icon: 'logos:cloudinary-icon' },
      ],
    },
  ],
};
