import { inject, Injectable, signal } from '@angular/core';
import { Movie } from '../models/movie.interface';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private readonly _httpClient = inject(HttpClient);

  likeMovie(movieId: number) {
    // const copy = this.movieList();
    // const movie = copy.find((m) => m.id === movieId);
    // if (movie) {
    //   movie.isLiked = !movie.isLiked;
    // }
    // this.movieList.set([...copy]);
    // TODO call API
  }

  getMoviesObservable(): Observable<Array<Movie>> {
    return this._httpClient.get<Array<Movie>>('http://localhost:3000/movies');
  }

  getMoviesPromise(): Promise<Array<Movie>> {
    return firstValueFrom(
      this._httpClient.get<Array<Movie>>('http://localhost:3000/movies'),
    );
  }
}
