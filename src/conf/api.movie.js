import * as axios from 'axios';

const apiMovie = axios.create({
    baseURL : 'https://api.themoviedb.org/4'
})

export default apiMovie;

apiMovie.interceptors.request.use( req => {
    req.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NGRkMWY0ODQxYzU3MjBjODhiNzNlMmZlMzM2YjM2YyIsInN1YiI6IjYxMTc4MjFiMjU4ODIzMDA0Nzc3ZWY2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0S-qeq04UJIvawij-g8Qfn2ApLZFKiwDqtMSYJMFkjk'
    return req;
})

export const apiMovieMap = m => ({
    img: 'https://image.tmdb.org/t/p/w500' + m.poster_path,
    title: m.title,
    details: `${ m.release_date } | ${ m.vote_average }/10 (${ m.vote_count })`,
    description: m.overview
  })