import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const usePosts = (userId: number | undefined) => useQuery<Post[], Error>({
  queryKey: ["users", userId, "posts"],
  queryFn: () => axios
    .get('https://jsonplaceholder.typicode.com/posts', {
      params: {
        userId
      }
    })
    .then((res) => (res.data)),
  staleTime: 60 * 1000 //1 min
})

export default usePosts