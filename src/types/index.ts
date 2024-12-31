export interface Balance {
    balance: number;
    locked: number;
}
export interface Balances {
    [userId: string]: Balance;
}
export interface Orders {
    [userId: string]: number;
}
export interface OrderDetails {
    total: number;
    orders: Orders;
}
export  type Options = "yes" | "no";

export interface OptionOrders {
    [price: string]: OrderDetails;
}
export  type MarketOrders = {
    [key in Options]: OptionOrders;
}
export  interface OrderBook {
    [marketId: string]: MarketOrders;
}
export  interface StockDetails {
    quantity: number;
    locked: number;
}
export type InstrumentBalances = {
    [K in Options]?: StockDetails;
};
export type UserBalances = {
    [instrument: string]: InstrumentBalances;
};
export type StockBalances = {
    [userId: string]: UserBalances;
};
