import axios from 'axios';

// Base da URL: https://api.themoviedb.org/3
// URL API: https://api.themoviedb.org/3/movie/now_playing?api_key=33ada1e5f82402c41cd9f3c5d94ce1a5&language=pt

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;