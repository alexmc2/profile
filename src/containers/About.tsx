// src/containers/About.tsx
'use client';
import { aboutSection } from '@/lib/content/about';
import { author } from '@/lib/content/portfolio';

import { AuthorImage, Link, ListItem, Wrapper } from '../components';
import { getSectionAnimation } from '../styles/animations';
import { useEffect, useState } from 'react';

const About = () => {
  const { title, img, list } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary">{title}</h2>
      <main className="flex flex-col items-center gap-16 lg:items-start lg:flex-row">
        <div className="space-y-4 lg:w-3/5">
          <p>Hi, I'm Alex McGarry - a junior developer passionate about building practical web applications.</p>
          <p>
            After completing the Northcoders bootcamp in 2023, I've been developing my skills through personal projects. I enjoy working with modern technologies like Next.js, React, and TypeScript to create solutions for real-world problems.
          </p>
          <p>
            I'm currently building Co-op Connect, a comprehensive management platform, which has been a great learning experience in working with complex database relationships and user authentication. I'm always eager to take on new challenges and learn emerging technologies.
          </p>

          {list && (
            <>
              <p>{list.title}</p>
              <ul className="grid w-2/3 grid-cols-2 gap-1 text-sm">
                {list.items.map((item, index) => (
                  <ListItem key={index}>{item}</ListItem>
                ))}
              </ul>
            </>
          )}
        </div>
        <AuthorImage src={img} alt={author.name} />
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
