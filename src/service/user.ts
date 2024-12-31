import { INR_BALANCES, STOCK_BALANCES, ORDERBOOK } from "./state";
import { Builder } from 'builder-pattern'
import { z } from "zod";
import { Balance } from "../types";

export const createUser = (userId: string) => {
    return initUserBalance(userId)
}

const initUserBalance = (userId: string) => {
    const userBalance: Balance = {
        balance: 0,
        locked: 0
    }
    INR_BALANCES[userId] = userBalance;
    console.log("user created with balance 0", userId)
    return userBalance
}