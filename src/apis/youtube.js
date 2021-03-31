import axios from 'axios';

const KEY = 'AIzaSyARDYTOhQMfYGg7V5ftelxy3aXITJqTYPA'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
