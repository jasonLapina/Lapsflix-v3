import axios from "axios";

const options = {
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMjk0MDc4YWM5ZTVkZWVlNDJlODE3ODFlZDUzYTAwYyIsInN1YiI6IjYzNzBiYTFkY2E0ZjY3MDA4MjExZTQxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AgtTPnkwPU7En5Gr3fxPWhi0T7X9uSPjYQs--c9roYY",
  },
  params: { include_adult: false, include_video: false, language: "en-US" },
};

const axiosInstance = axios.create(options);

export default axiosInstance;
