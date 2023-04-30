import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient from "../services/api-client";
import FetchResponse from "../services/api-client"

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}


const useGenres = () => useQuery({
  queryKey: ["geners"],
  queryFn: () => 
    apiClient
      .get<FetchResponse<Genre>>("/geners").then(res => res.data),
  staleTime: 24 * 3600 * 1000,
  initialData: { count: genres.length, results: genres}
})

export default useGenres;