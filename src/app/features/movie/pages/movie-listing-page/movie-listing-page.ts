import { Component } from '@angular/core';
import { Movie } from '../../../../core/models/movie.interface';
import { MovieCard } from '../../../../shared/components/movie-card/movie-card';

@Component({
  selector: 'app-movie-listing-page',
  imports: [MovieCard],
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
        'https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg',
    },
    {
      id: 2,
      title: 'Le Parrain',
      director: 'Francis Ford Coppola',
      year: 1972,
      genre: 'Crime',
      img_url:
        'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
    },
    {
      id: 3,
      title: 'Pulp Fiction',
      director: 'Quentin Tarantino',
      year: 1994,
      genre: 'Thriller',
      img_url:
        'https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
    },
    {
      id: 4,
      title: 'Interstellar',
      director: 'Christopher Nolan',
      year: 2014,
      genre: 'Aventure',
      img_url:
        'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    },
    {
      id: 5,
      title: 'Parasite',
      director: 'Bong Joon-ho',
      year: 2019,
      genre: 'Drame',
      img_url:
        'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
    },
    {
      id: 6,
      title: 'Matrix',
      director: 'Lana & Lilly Wachowski',
      year: 1999,
      genre: 'Action',
      img_url:
        'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
    },
    {
      id: 7,
      title: 'Le Voyage de Chihiro',
      director: 'Hayao Miyazaki',
      year: 2001,
      genre: 'Animation',
      img_url:
        'https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg',
    },
    {
      id: 8,
      title: 'Fight Club',
      director: 'David Fincher',
      year: 1999,
      genre: 'Drame',
      img_url:
        'https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg',
    },
    {
      id: 9,
      title: 'Gladiator',
      director: 'Ridley Scott',
      year: 2000,
      genre: 'Action',
      img_url:
        'https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg',
    },
    {
      id: 10,
      title: 'La Liste de Schindler',
      director: 'Steven Spielberg',
      year: 1993,
      genre: 'Histoire',
      img_url:
        'https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg',
    },
  ];

  onLikeEvent(movieId: number) {
    console.log('MovieListing onLikeEvent - ' + movieId);
  }
}
