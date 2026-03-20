import { Injectable, signal } from '@angular/core';
import { UserRole } from '@core/enums/user-role.enum';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authToken = signal<string>('');
  role = signal<UserRole | null>(null);

  login(email: string, password: string) {
    // TODO appel API
    this.authToken.set('JeNaiPasEncoreConnecteLAPI');

    // TODO Décodage du token
    // pour récuperer le userId et role du user
    this.role.set(UserRole.User);
  }
}
