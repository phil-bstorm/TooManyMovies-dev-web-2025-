import { Component, inject, OnInit, signal } from '@angular/core';
import { MovieCard } from '../../../../shared/components/movie-card/movie-card';
import { MovieService } from '../../../../core/services/movie.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '@core/models/movie.interface';

@Component({
  selector: 'app-movie-listing-page',
  imports: [MovieCard, FormsModule],
  templateUrl: './movie-listing-page.html',
  styleUrl: './movie-listing-page.scss',
})
export class MovieListingPage implements OnInit {
  private readonly _movieService = inject(MovieService);
  private readonly _router = inject(Router);
  private readonly _activatedRoute = inject(ActivatedRoute);

  movies = signal<Array<Movie>>([]);
  moviesError = signal<string>('');

  /* Chmaps de recherche */
  movieTitleSearch = '';

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe({
      next: async (queryParam) => {
        console.log(queryParam);
        this.movieTitleSearch = queryParam['movieTitle'];

        // OBSERVABLE
        this._movieService.getMoviesObservable().subscribe({
          next: (response) => {
            console.log(response);

            this.movies.set(response);
          },
          error: (err: Error) => {
            // Une erreur s'est produite
            this.moviesError.set(err.message);
          },
        });

        // PROMESSE
        // try {
        //   this.movies.set(await this._movieService.getMoviesPromise());
        // } catch (error) {
        //   const e = error as Error;
        //   console.log(e);
        //   this.moviesError.set(e.message);
        // }
      },
    });
  }

  onClickSearch() {
    this._router.navigate(['/'], {
      queryParams: {
        movieTitle: this.movieTitleSearch,
      },
    });
  }

  onLikeEvent(movieId: number) {
    this._movieService.likeMovie(movieId);
  }
}
