import { Routes } from '@angular/router';
import { MovieListingPage } from './features/movie/pages/movie-listing-page/movie-listing-page';
import { connectedGuard } from '@core/guards/connected.guard';
import { adminGuard } from '@core/guards/admin.guard';
import { Error404Page } from './features/errors/pages/error-404-page/error-404-page';

export const routes: Routes = [
  {
    path: '',
    component: MovieListingPage,
  },
  {
    path: 'movie/add',
    canActivate: [adminGuard],
    loadComponent: () =>
      import('./features/movie/pages/movie-add-page/movie-add-page').then(
        (c) => c.MovieAddPage,
      ),
  },
  {
    path: 'movie/:id',
    loadComponent: () =>
      import('./features/movie/pages/movie-details-page/movie-details-page').then(
        (c) => c.MovieDetailsPage,
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.router').then((r) => r.routes),
  },
  {
    path: 'user',
    canActivate: [connectedGuard],
    loadChildren: () =>
      import('./features/user/user.routes').then((r) => r.routes),
  },
  {
    path: '**',
    component: Error404Page,
  },
];
