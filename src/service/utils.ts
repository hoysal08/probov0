import { INR_BALANCES, ORDERBOOK, STOCK_BALANCES } from "./state";

function generateUniqueId() {
    return Math.random().toString(16).slice(2) + (new Date()).getTime() + Math.random().toString(16).slice(2);
}
export function clearState() {
    Object.assign(INR_BALANCES, {});
    Object.assign(STOCK_BALANCES, {});
    Object.assign(ORDERBOOK, {});
}