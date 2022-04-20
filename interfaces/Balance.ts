import { Moralis } from 'moralis/types';

export interface IBalanceProps {
    user:  Moralis.User | null,
}

export interface IBalanceResult {
    balance: string
}

