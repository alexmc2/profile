// src/containers/Projects.tsx
'use client';
import { projectsSection } from '@/lib/content/projects';
import { PROJECTS_INITIALLY } from '@/lib/utils/config';
import { sortByYear } from '@/lib/utils/helper';

import { Button, ProjectCard, Wrapper } from '../components';
import { getSectionAnimation } from '../styles/animations';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Projects = () => {
  const { projects, title } = projectsSection;
  const [showMore, setShowMore] = useState(false);
  const topProjects = projects.slice(0, PROJECTS_INITIALLY);

  const visibleProjects = showMore ? projects : topProjects;

  return (
    <Wrapper animate={false} {...getSectionAnimation}>
      <motion.h2 className="heading-secondary text-center !mb-12">
        {title}
      </motion.h2>
      
      {/* Container to match About section centering */}
      <div className="max-w-screen-lg mx-auto space-y-14">
        {sortByYear(visibleProjects).map((project, i) => (
          <ProjectCard
            {...project}
            key={project.id}
          />
        ))}
      </div>

      {projects.length > PROJECTS_INITIALLY && (
        <Button
          size="lg"
          className="!mt-20"
          center
          onClick={() => setShowMore((prev) => !prev)}
        >
          {showMore ? 'show less' : 'show more'}
        </Button>
      )}
    </Wrapper>
  );
};

export default Projects;
