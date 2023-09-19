import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'c513dffb6b6a902870f81321a51e422e';

const instance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export async function getTrendingMovies() {
  const { data } = await instance.get(
    `trending/movie/day`
    //     {
    // signal,
    //     }
  );
  return data;
}

export async function getMovieById(movieId) {
  const { data } = await instance.get(`movie/${movieId}`);
  return data;
}

export async function getMoviesOnQuery(query) {
  const searchParams = new URLSearchParams({
    query: query,
  });
  const { data } = await instance.get(`search/movie?${searchParams}`);
  return data;
}

export async function getMovieCast(movieId) {
  const { data } = await instance.get(`movie/${movieId}/credits`);
  return data;
}

export async function getMovieReviews(movieId) {
  const { data } = await instance.get(`movie/${movieId}/reviews`);
  return data;
}
