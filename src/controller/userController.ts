import { Router } from "express";
import { z } from "zod";
import { createUser } from "../service/user";


const app = Router();

app.post("/user/create/:userId", (req, res) => {
    const userId = z.string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
    }).parse(req.params.userId);

    const user = createUser(userId)
    res.json({ user })
})
