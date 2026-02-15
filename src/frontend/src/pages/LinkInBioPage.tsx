import { linkBioConfig } from '../linkBioConfig';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import SocialLinksList from '../components/SocialLinksList';
import BookingButton from '../components/BookingButton';
import NewsletterSignup from '../components/NewsletterSignup';
import { Heart } from 'lucide-react';

export default function LinkInBioPage() {
  const { profile, socialLinks, booking, footer } = linkBioConfig;
  const avatarUrl = profile.avatarUrl || '/assets/generated/avatar-placeholder.dim_512x512.png';
  const initials = profile.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: 'url(/assets/generated/linkbio-bg.dim_1600x900.png)' }}
      />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-background/80 via-background/90 to-background" />

      {/* Content */}
      <main className="container max-w-2xl mx-auto px-4 py-12 md:py-20">
        {/* Profile Header */}
        <header className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Avatar className="w-32 h-32 mx-auto mb-6 ring-4 ring-accent/20 shadow-xl">
            <AvatarImage src={avatarUrl} alt={profile.name} />
            <AvatarFallback className="text-3xl font-semibold bg-gradient-to-br from-accent to-accent/70 text-accent-foreground">
              {initials}
            </AvatarFallback>
          </Avatar>
          <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
            {profile.name}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-medium">{profile.tagline}</p>
        </header>

        {/* Social Links */}
        <section className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          <SocialLinksList links={socialLinks} />
        </section>

        {/* Booking Button */}
        <section className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          <BookingButton label={booking.label} url={booking.url} />
        </section>

        {/* Newsletter Signup */}
        <section className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <NewsletterSignup />
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground animate-in fade-in duration-700 delay-500">
          {footer?.text && <p className="mb-3">{footer.text}</p>}
          <p className="flex items-center justify-center gap-1.5">
            Built with{' '}
            <Heart className="w-4 h-4 fill-accent text-accent inline-block animate-pulse" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                typeof window !== 'undefined' ? window.location.hostname : 'unknown-app'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-foreground transition-colors underline decoration-accent/30 hover:decoration-accent"
            >
              caffeine.ai
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
}
