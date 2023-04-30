import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export const usePlatforms = () => useQuery({
  queryKey: ["platforms"],
  queryFn: () =>
   apiClient
    .get<FetchResponse<Platform>>("/platforms/lists/parents")
    .then(res => res.data),
  staleTime: 24 * 3600 * 1000,
  initialData: { count: platforms.length, results: platforms}
})