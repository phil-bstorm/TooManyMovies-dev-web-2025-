import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NewMovie } from '@core/models/movie.interface';
import { MovieService } from '@core/services/movie.service';
import { FormsErrorDisplay } from '@shared/components/forms-error-display/forms-error-display';

@Component({
  imports: [ReactiveFormsModule, FormsErrorDisplay],
  templateUrl: './movie-add-page.html',
  styleUrl: './movie-add-page.scss',
})
export class MovieAddPage {
  private readonly _fb = inject(FormBuilder);
  private readonly _movieService = inject(MovieService);
  private readonly _router = inject(Router);

  title = new FormControl('', [
    Validators.required,
    Validators.minLength(1),
    Validators.maxLength(255),
  ]);
  director = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(255),
  ]);
  year = new FormControl(2000, [Validators.required, Validators.min(1900)]);
  genre = new FormControl('', [Validators.required]);
  img_url = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(255),
  ]);

  addMovieForm = this._fb.group({
    title: this.title,
    director: this.director,
    year: this.year,
    genre: this.genre,
    img_url: this.img_url,
  });

  addMovie() {
    this.addMovieForm.markAllAsTouched();

    if (this.addMovieForm.valid) {
      const data: NewMovie = {
        title: this.title.value!,
        director: this.director.value!,
        year: this.year.value!,
        genre: this.genre.value!,
        img_url: this.img_url.value!,
      };
      this._movieService
        .addMovie(data)
        .then(() => {
          this._router.navigate(['/movie']);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }
}
