
export enum UserRole {
  SUPERADMIN = 'Superadmin',
  ADMIN = 'Admin',
  SERVICE_ADVISOR = 'Service Advisor',
  FOREMAN = 'Foreman',
}

export interface User {
  id: string;
  nama: string;
  email: string;
  role: UserRole;
  avatarUrl?: string;
}
