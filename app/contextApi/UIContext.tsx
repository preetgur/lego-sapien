"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

interface UIContextType {
  isLoading: boolean;
  toggleLoading: () => void;
  startLoading: () => void;
  stopLoading: () => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

interface UIProviderProps {
  children: ReactNode;
}

export const UIProvider: React.FC<UIProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const startLoading = () => {
    setIsLoading(true);
  };
  const stopLoading = () => {
    setIsLoading(false);
  };
  console.log({ isLoading });
  const toggleLoading = () => {
    setIsLoading(true);
  };

  return (
    <UIContext.Provider
      value={{ isLoading, toggleLoading, startLoading, stopLoading }}
    >
      {children}
    </UIContext.Provider>
  );
};

// Custom hook to use the UI context
export const useUI = (): UIContextType => {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error("useUI must be used within a UIProvider");
  }
  return context;
};
