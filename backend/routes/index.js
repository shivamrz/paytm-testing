// backend/user/index.js
const express = require('express');
const userRouter = require("./user");
const accountRouter = require("./account");

export const router = express.Router();

router.use("/user", userRouter);
router.use("/account", accountRouter);
