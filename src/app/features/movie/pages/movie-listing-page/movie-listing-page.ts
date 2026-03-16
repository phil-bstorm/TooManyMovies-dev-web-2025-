import { Component, inject } from '@angular/core';
import { MovieCard } from '../../../../shared/components/movie-card/movie-card';
import { MovieService } from '../../../../core/services/movie.service';

@Component({
  selector: 'app-movie-listing-page',
  imports: [MovieCard],
  templateUrl: './movie-listing-page.html',
  styleUrl: './movie-listing-page.scss',
})
export class MovieListingPage {
  private readonly _movieService = inject(MovieService);

  movies = this._movieService.movieList;

  onLikeEvent(movieId: number) {
    this._movieService.likeMovie(movieId);
  }
}
