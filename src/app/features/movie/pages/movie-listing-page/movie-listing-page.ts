import { Component } from '@angular/core';
import { Movie } from '../../../../core/models/movie.interface';

@Component({
  selector: 'app-movie-listing-page',
  imports: [],
  templateUrl: './movie-listing-page.html',
  styleUrl: './movie-listing-page.scss',
})
export class MovieListingPage {
  movieList: Array<Movie> = [
    {
      id: 1,
      title: 'Inception',
      director: 'Christopher Nolan',
      year: 2010,
      genre: 'Science-Fiction',
      img_url:
        'https://image.tmdb.org/t/p/w500/9gk7Y9CqnM967STWzYjQZghzfs6.jpg',
    },
    {
      id: 2,
      title: 'Le Parrain',
      director: 'Francis Ford Coppola',
      year: 1972,
      genre: 'Crime',
      img_url:
        'https://image.tmdb.org/t/p/w500/rPdtO1oPbepxv97qNLCqSIs6vqc.jpg',
    },
    {
      id: 3,
      title: 'Pulp Fiction',
      director: 'Quentin Tarantino',
      year: 1994,
      genre: 'Thriller',
      img_url:
        'https://image.tmdb.org/t/p/w500/fIE3lA0Yp6G6S8S7S9mO696Zas6.jpg',
    },
    {
      id: 4,
      title: 'Interstellar',
      director: 'Christopher Nolan',
      year: 2014,
      genre: 'Aventure',
      img_url:
        'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6vCU67xtiBP2l.jpg',
    },
    {
      id: 5,
      title: 'Parasite',
      director: 'Bong Joon-ho',
      year: 2019,
      genre: 'Drame',
      img_url:
        'https://image.tmdb.org/t/p/w500/7S9s9v9vS6fL7vM0X3fM9S6XfL7.jpg',
    },
    {
      id: 6,
      title: 'Matrix',
      director: 'Lana & Lilly Wachowski',
      year: 1999,
      genre: 'Action',
      img_url:
        'https://image.tmdb.org/t/p/w500/f89U3Y9Y9Xm9S6fL7vM0X3fM9S6.jpg',
    },
    {
      id: 7,
      title: 'Le Voyage de Chihiro',
      director: 'Hayao Miyazaki',
      year: 2001,
      genre: 'Animation',
      img_url:
        'https://image.tmdb.org/t/p/w500/39wmItS6vgynoIkiZpC7109vTzR.jpg',
    },
    {
      id: 8,
      title: 'Fight Club',
      director: 'David Fincher',
      year: 1999,
      genre: 'Drame',
      img_url: 'https://image.tmdb.org/t/p/w500/pB8BM79vU7vM0X3fM9S6XfL7.jpg',
    },
    {
      id: 9,
      title: 'Gladiator',
      director: 'Ridley Scott',
      year: 2000,
      genre: 'Action',
      img_url:
        'https://image.tmdb.org/t/p/w500/ty8Tj9He86z5o7XfS6XfL7vM0X3.jpg',
    },
    {
      id: 10,
      title: 'La Liste de Schindler',
      director: 'Steven Spielberg',
      year: 1993,
      genre: 'Histoire',
      img_url:
        'https://image.tmdb.org/t/p/w500/sF1U4pTvuS6fL7vM0X3fM9S6XfL7.jpg',
    },
  ];
}
