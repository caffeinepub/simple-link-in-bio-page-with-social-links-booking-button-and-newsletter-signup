import { Button } from '@/components/ui/button';
import type { SocialLink } from '../linkBioConfig';

interface SocialLinksListProps {
  links: SocialLink[];
}

export default function SocialLinksList({ links }: SocialLinksListProps) {
  return (
    <div className="flex flex-col gap-3">
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <Button
            key={link.label}
            variant="outline"
            size="lg"
            className="w-full h-auto py-4 px-6 text-base font-medium hover:scale-[1.02] hover:shadow-lg transition-all duration-200 bg-card/50 backdrop-blur-sm border-border/60 hover:border-accent/50 hover:bg-accent/5"
            asChild
          >
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              <Icon className="w-5 h-5 mr-3" />
              {link.label}
            </a>
          </Button>
        );
      })}
    </div>
  );
}
