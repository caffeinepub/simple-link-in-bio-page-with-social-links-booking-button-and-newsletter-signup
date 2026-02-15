import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Mail, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { useNewsletterSignup } from '../hooks/useNewsletterSignup';
import { validateEmail } from '../lib/newsletterValidation';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [validationError, setValidationError] = useState<string | null>(null);
  const { submit, status, error: submitError } = useNewsletterSignup();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    const validation = validateEmail(email);
    if (!validation.isValid) {
      setValidationError(validation.error || 'Invalid email');
      return;
    }

    await submit(email);
    if (status === 'success') {
      setEmail('');
    }
  };

  const isSubmitting = status === 'submitting';
  const isSuccess = status === 'success';
  const isError = status === 'error';

  return (
    <Card className="border-border/60 bg-card/50 backdrop-blur-sm shadow-lg">
      <CardHeader className="text-center pb-4">
        <div className="mx-auto mb-3 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
          <Mail className="w-6 h-6 text-accent" />
        </div>
        <CardTitle className="text-2xl">Stay Connected</CardTitle>
        <CardDescription className="text-base">
          Subscribe to get updates and exclusive content delivered to your inbox.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setValidationError(null);
              }}
              disabled={isSubmitting || isSuccess}
              className="h-12 text-base bg-background/50 border-border/60 focus:border-accent/50 focus:ring-accent/20"
              aria-label="Email address"
            />
            {validationError && (
              <p className="text-sm text-destructive flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4" />
                {validationError}
              </p>
            )}
          </div>

          {isSuccess && (
            <Alert className="border-accent/50 bg-accent/5">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              <AlertDescription className="text-accent-foreground">
                Thanks for subscribing! Check your inbox for confirmation.
              </AlertDescription>
            </Alert>
          )}

          {isError && submitError && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{submitError}</AlertDescription>
            </Alert>
          )}

          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting || isSuccess}
            className="w-full h-12 text-base font-semibold"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Subscribing...
              </>
            ) : isSuccess ? (
              <>
                <CheckCircle2 className="w-5 h-5 mr-2" />
                Subscribed!
              </>
            ) : (
              <>
                <Mail className="w-5 h-5 mr-2" />
                Subscribe
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
