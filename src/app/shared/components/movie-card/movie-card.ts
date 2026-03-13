import { Component, input, output } from '@angular/core';
import { Movie } from '../../../core/models/movie.interface';

@Component({
  selector: 'app-movie-card',
  imports: [],
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
