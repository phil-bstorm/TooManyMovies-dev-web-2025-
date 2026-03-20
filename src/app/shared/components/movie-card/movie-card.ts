import { Component, input, output } from '@angular/core';
import { Movie } from '../../../core/models/movie.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  imports: [RouterLink],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.scss',
})
export class MovieCard {
  movieInput = input.required<Movie>();

  likeEvent = output<number>();

  onLikeBtn() {
    console.log('(MovieCard) - Like Btn');
    this.likeEvent.emit(this.movieInput().id);
  }
}
