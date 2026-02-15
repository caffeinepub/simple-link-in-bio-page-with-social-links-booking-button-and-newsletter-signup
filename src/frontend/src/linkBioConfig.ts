import { SiX, SiInstagram, SiLinkedin, SiGithub } from 'react-icons/si';
import type { IconType } from 'react-icons';

export interface SocialLink {
  label: string;
  url: string;
  icon: IconType;
}

export interface LinkBioConfig {
  profile: {
    name: string;
    tagline: string;
    avatarUrl?: string;
  };
  socialLinks: SocialLink[];
  booking: {
    label: string;
    url: string;
  };
  footer?: {
    text: string;
  };
}

export const linkBioConfig: LinkBioConfig = {
  profile: {
    name: 'Your Name',
    tagline: 'Creator • Designer • Developer',
    // Leave undefined to use the default generated avatar
    avatarUrl: undefined,
  },
  socialLinks: [
    {
      label: 'X (Twitter)',
      url: 'https://x.com/yourusername',
      icon: SiX,
    },
    {
      label: 'Instagram',
      url: 'https://instagram.com/yourusername',
      icon: SiInstagram,
    },
    {
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: SiLinkedin,
    },
    {
      label: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: SiGithub,
    },
  ],
  booking: {
    label: 'Book a Call',
    url: 'https://calendly.com/yourusername',
  },
  footer: {
    text: '© 2026 Your Name. All rights reserved.',
  },
};
