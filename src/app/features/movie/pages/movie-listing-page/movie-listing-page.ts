import { Component, inject, OnInit } from '@angular/core';
import { MovieCard } from '../../../../shared/components/movie-card/movie-card';
import { MovieService } from '../../../../core/services/movie.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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

  movies = this._movieService.movieList;

  /* Chmaps de recherche */
  movieTitleSearch = '';

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe({
      next: (queryParam) => {
        console.log(queryParam);
        this.movieTitleSearch = queryParam['movieTitle'];
      },
    });
  }

  onClickSearch() {
    // appel API

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
