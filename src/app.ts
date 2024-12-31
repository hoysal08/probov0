import express from "express";
import { INR_BALANCES } from "./service/state";
import { clearState } from "./service/utils";
const PORT = 8080;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, TypeScript Node Express!");
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  clearState()
});
