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

  async login(email: string, password: string): Promise<void> {
    // appel API
    const response = await firstValueFrom(
      this._httpClient.post<LoginResponse>('http://localhost:3000/login', {
        email: email,
        password: password,
      }),
    );

    this.authToken.set(response.accessToken);

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
}
