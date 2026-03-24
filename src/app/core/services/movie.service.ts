import { inject, Injectable, signal } from '@angular/core';
import { Movie, NewMovie } from '../models/movie.interface';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';
import { environment } from '@env';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private readonly _httpClient = inject(HttpClient);
  private readonly _apiUrl = environment.apiURL;

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
    return this._httpClient.get<Array<Movie>>(this._apiUrl + '/movies');
  }

  getMoviesPromise(): Promise<Array<Movie>> {
    return firstValueFrom(
      this._httpClient.get<Array<Movie>>(this._apiUrl + '/movies'),
    );
  }

  addMovie(movieData: NewMovie): Promise<Movie> {
    return firstValueFrom(
      this._httpClient.post<Movie>(this._apiUrl + '/movies', movieData),
    );
  }
}
