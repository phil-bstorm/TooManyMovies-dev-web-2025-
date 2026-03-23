import { JwtPayload } from 'jwt-decode';

export interface LoginResponse {
  accessToken: string;
}

export interface JwtDecoded extends JwtPayload {
  role: string;
}
