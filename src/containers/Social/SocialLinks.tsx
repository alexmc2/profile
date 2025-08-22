// src/containers/Social/SocialLinks.tsx
import { socialSection } from '@/lib/content/social';

import { SocialIcon } from '../../../src/components';

const SocialLinks = ({ className = '' }: { className?: string }) => {
  const { socialLinks } = socialSection;
  return (
    <ul className={className}>
      {socialLinks.map(({ icon, url }, index) => (
        <SocialIcon key={`${url}-${index}`} icon={icon} url={url} />
      ))}
    </ul>
  );
};

export default SocialLinks;
