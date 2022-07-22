export type UserRoles = 'admin' | 'user' | 'customer';

export interface User {
  username: string;
  roles: string[];
}


