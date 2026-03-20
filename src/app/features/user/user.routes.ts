import { Routes } from '@angular/router';
import { UserProfilePage } from './pages/user-profile-page/user-profile-page';

export const routes: Routes = [
  {
    path: 'profile',
    component: UserProfilePage,
  },
  {
    path: 'profile/edit',
    loadComponent: () =>
      import('./pages/user-edit-profile-page/user-edit-profile-page').then(
        (c) => c.UserEditProfilePage,
      ),
  },
];
