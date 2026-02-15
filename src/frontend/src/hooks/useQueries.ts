import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';

export function useIsSubscribed(email: string) {
  const { actor, isFetching } = useActor();

  return useQuery({
    queryKey: ['isSubscribed', email],
    queryFn: async () => {
      if (!actor || !email) return false;
      return actor.isSubscribed(email);
    },
    enabled: !!actor && !isFetching && !!email,
  });
}

export function useGetAllSubscribers() {
  const { actor, isFetching } = useActor();

  return useQuery({
    queryKey: ['subscribers'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllSubscribers();
    },
    enabled: !!actor && !isFetching,
  });
}
