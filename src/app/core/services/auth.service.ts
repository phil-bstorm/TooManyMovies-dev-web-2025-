import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { UserRole } from '@core/enums/user-role.enum';
import {
  JwtDecoded,
  LoginResponse,
  RegisterData,
} from '@core/models/auth.interface';
import { jwtDecode } from 'jwt-decode';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _httpClient = inject(HttpClient);

  private _authToken = signal<string>('');
  authToken = this._authToken.asReadonly();
  private _role = signal<UserRole | null>(null);
  role = this._role.asReadonly();

  isAdmin = computed<boolean>(() => {
    return this.role() === UserRole.Admin;
  });
  isConnected = computed<boolean>(() => !!this.authToken()); // !! convertis en booléan
  // Que fais "!!"? il transfome une valeur en booléen (exemple):
  // on prend la valeur de this.authToken ("abc")
  // le premier "!" inverse "abc" = false
  // (pour rappel une chaine de texte non vide est "vrai" en JS)
  // le deuxième "!" re-inverse le false en VRAI.
  // donc "abc" (string) devient true (boolean)

  constructor() {
    // Effect pour sauvegarder token,
    // mettre à jour le _role et vérifier la durée de vie du token
    effect(() => {
      /*
        Cet effect est activé à chaque fois que this._authToken() change de valeur
        Il faut penser à tout les cas:
          - login
          - lorsque on est connecté avec token dans le localstorage
          - logout

        Lorsqu'on "log in" et "la récupération du localstorage" -> on obtient un token
        Lorsqu'on "log out" -> on a une chaîne de texte vide
      */
      const token = this._authToken();
      if (!token) {
        localStorage.removeItem('token');
        this._role.set(null);
        return;
      }
      localStorage.setItem('token', token);

      // Décodage du token
      // pour récuperer le userId et _role du user
      const decoded = jwtDecode<JwtDecoded>(token);

      // si mon token n'est pas expiré (exp), je place dans le signal,
      // sinon je le supprime du localstorage
      if (decoded.exp && decoded.exp * 1000 > Date.now()) {
        this._role.set((decoded.role as UserRole) ?? UserRole.User);
      } else {
        this._authToken.set('');
      }
    });

    const localToken = localStorage.getItem('token');
    if (localToken) {
      this._authToken.set(localToken);
    }
  }

  async login(email: string, password: string): Promise<void> {
    // appel API
    const response = await firstValueFrom(
      this._httpClient.post<LoginResponse>('http://localhost:3000/login', {
        email: email,
        password: password,
      }),
    );

    this._authToken.set(response.accessToken);
  }

  async register(userData: RegisterData): Promise<void> {
    await firstValueFrom(
      this._httpClient.post('http://localhost:3000/register', userData),
    );
  }

  logout() {
    this._authToken.set('');
  }
}
