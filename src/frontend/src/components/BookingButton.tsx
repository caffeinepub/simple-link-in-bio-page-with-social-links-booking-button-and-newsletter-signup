import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

interface BookingButtonProps {
  label: string;
  url: string;
}

export default function BookingButton({ label, url }: BookingButtonProps) {
  return (
    <Button
      size="lg"
      className="w-full h-auto py-5 px-8 text-lg font-semibold shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-200 bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-accent-foreground"
      asChild
    >
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Calendar className="w-6 h-6 mr-3" />
        {label}
      </a>
    </Button>
  );
}
