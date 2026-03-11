import { Routes } from '@angular/router';
import { MovieListingPage } from './features/movie/pages/movie-listing-page/movie-listing-page';

export const routes: Routes = [
  {
    path: '',
    component: MovieListingPage,
  },
  {
    path: 'movie/add',
    loadComponent: () =>
      import('./features/movie/pages/movie-add-page/movie-add-page').then(
        (c) => c.MovieAddPage,
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.router').then((r) => r.routes),
  },
];
