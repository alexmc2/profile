// src/app/page.tsx
import {
  About,
  CogAnimation,
  Contact,
  Experience,
  FeaturedProjects,
  Hero,
  Layout,
  Projects,
  Skills,
} from '@/containers';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Hero />

        <About />
        <Skills />
        {/* <Experience /> */}
        {/* <FeaturedProjects /> */}
        <Projects />
        <Contact />
        {/* <CogAnimation /> */}
      </Layout>
    </>
  );
};

export default Home;
