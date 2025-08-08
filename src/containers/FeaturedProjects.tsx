// Uncomment this component when ready to use
// 'use client';

// import featuredProjectsSection from '@/lib/content/featured-projects';

// import { Wrapper } from '../../src/components';
// import { getSectionAnimation } from '../../src/styles/animations';
// import FeaturedProject from '../components/ui/FeaturedProject';

// const FeaturedProjects = () => {
//   return (
//     <Wrapper id="projects" {...getSectionAnimation}>
//       <div className="mb-20 space-y-3 text-center lg:text-left">
//         <h2 className="heading-secondary !mb-0 capitalize">
//           {featuredProjectsSection.title}
//         </h2>

//         <p className="font-mono lg:hidden text-accent capitalize text-xs lg:mb-2.5">
//           featured projects
//         </p>
//       </div>

//       <div className="space-y-10 md:space-y-16 lg:space-y-36">
//         {featuredProjectsSection.projects.map((project, i) => (
//           <FeaturedProject
//             key={project.id}
//             align={i % 2 === 0 ? 'right' : 'left'}
//             {...project}
//             {...getSectionAnimation}
//           />
//         ))}
//       </div>
//     </Wrapper>
//   );
// };

// export default FeaturedProjects;

// Placeholder export to satisfy TypeScript and index.ts re-export
const FeaturedProjects = () => null;
export default FeaturedProjects;
