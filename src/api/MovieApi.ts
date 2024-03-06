const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;
const TOKEN = process.env.REACT_APP_TOKEN;

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${TOKEN}`
  }
};
interface IMoive{
  id: number
  backdrop_path: string
  poster_path: string
  title: string
  overview: string
}

export interface IGetMovieResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMoive[],
  total_pages: number
  total_results: number
}

export function getMovies(){
  return fetch(`${BASE_URL}?anguage=ko&page=1`, options).then(res=>res.json())
}