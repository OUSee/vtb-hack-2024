export type Wallet = {
  id: string;
  name: string;
  currensies: [
    { currency: Currency; ammount: 100 },
    { currency: Currency; ammount: 0.45 },
    { currency: Currency; ammount: 4.05 }
  ];
};

export type Currency = {
  currency: CurrencyEnum;
  cource: number;
};

export enum CurrencyEnum {
  RUB = "RUB",
  BTC = "BTC",
  ETC = "ETC",
}

export type Card = {
  id: string;
  cardHolderName?: string;
  CardName?: string;
  cardNumber: string;
  cardExpiryDate?: string;
  balance: number;
};