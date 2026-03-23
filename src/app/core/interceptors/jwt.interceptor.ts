import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '@core/services/auth.service';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);

  // Récupération du token dans le service
  const token = authService.authToken();

  // est-ce qu'on a un token?
  if (token) {
    // clone de la requête pour ajouter "Authorization" dans les headers
    const reqClone = req.clone({
      headers: req.headers.append('Authorization', 'Bearer ' + token),
    });

    // retourne la requête modifée
    return next(reqClone);
  }

  return next(req);
};
