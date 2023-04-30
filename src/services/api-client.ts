import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "01daeb4cb7104962b9db5388bbdabc64"
  }
})