import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
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

  authToken = signal<string>('');
  role = signal<UserRole | null>(null);

  constructor() {
    const localToken = localStorage.getItem('token');
    if (localToken) {
      const decoded = jwtDecode<JwtDecoded>(localToken);

      // si mon token n'est pas expiré (exp), je place dans le signal,
      // sinon je le supprime du localstorage
      if (decoded.exp && decoded.exp * 1000 > Date.now()) {
        this.authToken.set(localToken);
        this.role.set((decoded.role as UserRole) ?? UserRole.User);
      } else {
        console.log('Remove token');

        // localStorage.removeItem('token');
      }
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

    this.authToken.set(response.accessToken);
    localStorage.setItem('token', response.accessToken);

    // Décodage du token
    // pour récuperer le userId et role du user

    const decoded = jwtDecode<JwtDecoded>(response.accessToken);

    console.log(decoded);

    this.role.set((decoded.role as UserRole) ?? UserRole.User);
  }

  async register(userData: RegisterData): Promise<void> {
    await firstValueFrom(
      this._httpClient.post('http://localhost:3000/register', userData),
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.authToken.set('');
    this.role.set(null);
  }
}
