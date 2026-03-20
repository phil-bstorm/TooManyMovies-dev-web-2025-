import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-details-page',
  imports: [],
  templateUrl: './movie-details-page.html',
  styleUrl: './movie-details-page.scss',
})
export class MovieDetailsPage implements OnInit {
  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _router = inject(Router);

  movieId: string = '';

  ngOnInit(): void {
    // Récupération de l'ID via le snapshot:
    // Angular regarde une fois la route et si elle change, la variable n'est pas mise à jour
    // exemple de changement: On passe d'un détails de film à un autre détails de film
    //                        sans repasser par une autre page
    // this.movieId = this._activatedRoute.snapshot.params['id'];

    // Récupération de l'ID avec un observable:
    // On va "s'abonner" au changement d'ID
    this._activatedRoute.params.subscribe({
      next: (params) => {
        this.movieId = params['id'];

        // Appel API pour récuperer le détails
      },
    });
  }

  onNextMovie() {
    let tmp = +this.movieId;
    tmp++;
    this._router.navigate(['/', 'movie', tmp]);
  }
}
