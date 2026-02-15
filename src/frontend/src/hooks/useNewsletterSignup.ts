import { useState } from 'react';
import { useActor } from './useActor';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function useNewsletterSignup() {
  const { actor } = useActor();
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);

  const submit = async (email: string) => {
    if (!actor) {
      setStatus('error');
      setError('Unable to connect. Please try again.');
      return;
    }

    setStatus('submitting');
    setError(null);

    try {
      await actor.joinNewsletter(email);
      setStatus('success');
    } catch (err) {
      setStatus('error');
      if (err instanceof Error) {
        // Check if it's a duplicate subscription error
        if (err.message.includes('already subscribed')) {
          setError('You are already subscribed with this email address.');
        } else {
          setError('Something went wrong. Please try again.');
        }
      } else {
        setError('Something went wrong. Please try again.');
      }
    }
  };

  return {
    submit,
    status,
    error,
  };
}
