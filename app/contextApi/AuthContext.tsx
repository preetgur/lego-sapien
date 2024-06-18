"use client";

import { UserInterface } from "@/types/user";
import React, { createContext, useState, useContext, ReactNode } from "react";

// Define the type for the context value
interface AuthContextType {
  user: UserInterface | null;
  setUserLogin: (user: UserInterface) => void;
  setUser: (user: UserInterface) => void;
  logout: () => void;
  isLoggedIn: boolean;
  setIsUserLoggedIn: (val: boolean) => void;
}

// Define the type for the user
// interface User {
//   id: string;
//   name: string;
//   email: string;
// }

// Create the context with the default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Define the type for the provider props
interface AuthProviderProps {
  children: ReactNode;
}

// Create the provider component
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserInterface | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const setUserLogin = (user: UserInterface) => {
    setUser(user);
  };

  const setIsUserLoggedIn = (val: boolean) => {
    setIsLoggedIn(val);
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isLoggedIn,
        setIsUserLoggedIn,
        setUserLogin,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the Auth context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
