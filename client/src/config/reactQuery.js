import { QueryClient } from "react-query";

export let configReactQuery = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchInterval: () => (countRef.current < 3 ? 3000 : false),
      staleTime: 15 * 60 * 1000,
      gcTime: 15 * 60 * 1000,
    },
  },
});
