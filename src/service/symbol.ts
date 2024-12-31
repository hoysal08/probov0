import { INR_BALANCES, STOCK_BALANCES, ORDERBOOK } from "./state";
import { Builder } from 'builder-pattern'
import { z } from "zod";


export const createSymbol = (stockSymbol: string) => {
    return initStockSymbol(stockSymbol)
}

const initStockSymbol = (stockSymbol: string) => {
    const stock: Balance = {
        balance: 0,
        locked: 0
    }
    INR_BALANCES[userId] = userBalance;
    console.log("user created with balance 0", userId)
    return userBalance
}