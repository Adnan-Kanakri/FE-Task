"use client";

import { ICardData, IExpenseData } from "@/endpoints/dtos";
import { createContext, useContext, ReactNode, useState, SetStateAction, Dispatch } from "react";

type rootState = {
  expenses: IExpenseData[];
  cards: ICardData[];
  setExpenses: Dispatch<SetStateAction<IExpenseData[]>>;
  setCards: Dispatch<SetStateAction<ICardData[]>>;
  filter: any[];
  setFilter: Dispatch<SetStateAction<any[]>>;
}



export const rootContext = createContext<rootState>({
  expenses: [],
  cards: [],
  setExpenses: () => { },
  setCards: () => { },
  filter: [],
  setFilter: () => { },
});

export function RootProvider({ children }: { children: ReactNode }) {
  const [expenses, setExpenses] = useState<IExpenseData[]>([])
  const [cards, setCards] = useState<ICardData[]>([])
  const [filter, setFilter] = useState<IExpenseData[]>([])

  return (
    <rootContext.Provider value={{ expenses, cards, setExpenses, setCards, filter, setFilter }}>
      {children}
    </rootContext.Provider>
  );
}

export function useRootContext(): rootState {
  return useContext(rootContext);
}
