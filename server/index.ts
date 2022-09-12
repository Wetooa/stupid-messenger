require("dotenv").config();
require("express-async-errors");

import express, { Application, Request, Response } from "express";
const app: Application = express();

// much needed middlewares
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const rateLimiter = require("express-rate-limit");

app.set("trust proxy", 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors());
app.use(xss());

// routes
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    msg: "Welcome to Stupid Messenger APi",
  });
});

const authRouter = require("./routes/authRoutes");
const messageRouter = require("./routes/messageRoutes");

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/message", messageRouter);

app.listen(5000, () => console.log("[server]: Server running on port 5000"));
