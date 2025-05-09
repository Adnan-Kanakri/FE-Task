export interface IExpenseData {
  id: string;
  description: string;
  amount: number;
  status: string;
  createdAt: string;
}

export interface IExpenseResponse {
  expenses: IExpenseData[];
}

export interface ICardData {
  id: string;
  cardholderName: string;
  last4Digits: string;
  status: string;
  issuedAt: string;
}

export interface ICardResponse {
  cards: ICardData[];
}
