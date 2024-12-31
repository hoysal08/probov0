import { Router } from "express";
import { z } from "zod";

const app = Router();
app.post("/symbol/create/:stockSymbol", (req, res) => {
    const stockSymbol = z.string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
    }).parse(req.params.stockSymbol);

    const user = createUser(userId)
    res.json({ user })
})