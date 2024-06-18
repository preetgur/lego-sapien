"use client";

import { useLocalStorage } from "@uidotdev/usehooks";
import React, {
  createContext,
  useContext,
  useEffect,
  ReactNode,
  useState,
} from "react";

type UserType = {
  email?: string;
  candidate_id?: string | number;
  candidate_token?: string;
  otp?: string | number;
};

type QuestionContextType = {
  setQuestion: React.Dispatch<React.SetStateAction<any>>;
  setCategory: React.Dispatch<React.SetStateAction<any>>;
  updateUser?: (params: UserType) => void;
  question: {
    id: number;
    question: string;
    ideal_answer: string;
    qb_category: number;
  } | null;
  category: {
    id: number;
    qb_category: number;
    is_default: true;
    is_deleted: false;
  } | null;
};

const QuestionContext = createContext<QuestionContextType>({
  setQuestion: () => {},
  setCategory: () => {},
  updateUser: () => {},
  question: null,
  category: null,
});

interface QuestionProviderProps {
  children: ReactNode;
}

export const QuestionProvider: React.FC<QuestionProviderProps> = ({
  children,
}) => {
  const [category, setCategory] = useLocalStorage("category", null);
  const [question, setQuestion] = useLocalStorage("question", null);

  // const updateUser = (newData: Partial<UserType>) => {
  //   setQuestion((prev) => ({ ...prev, ...newData }));
  // };

  return (
    <QuestionContext.Provider
      value={{ setQuestion, question, setCategory, category }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

export const useQuestionContext = (): QuestionContextType => {
  const context = useContext(QuestionContext);
  if (!context) {
    throw new Error(
      "useQuestionContext must be used within an QuestionContext Provider"
    );
  }
  return context;
};
