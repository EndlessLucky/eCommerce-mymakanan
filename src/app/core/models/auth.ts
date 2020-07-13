import { Entity } from './base';

export interface LoginResponse {
  accessToken: string;
}

export enum UserRole {
  Supplier = 'Supplier',
  Customer = 'Customer',
}

export interface User extends Entity {
  role: UserRole;
  phone: string;
  password: string;
  personalId: string;
  name: string;
  email: string;
  address1: string;
  address2: string;
  area: string;
  state: string;
}

export interface DecodedToken {
  id: string;
  name: string;
  role: UserRole;
  iat: number;
  exp: number;
}
