
import React, { createContext, useContext, ReactNode } from 'react';
import { User, UserRole } from '../types';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const mockUser: User = {
  id: 'usr_1',
  nama: 'Super Admin',
  email: 'superadmin@wmsauto.com',
  role: UserRole.SUPERADMIN,
  avatarUrl: `https://i.pravatar.cc/100?u=superadmin`,
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const value = {
    user: mockUser,
    isAuthenticated: true,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
